import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
import {ALGO_MyAlgoConnect as MyAlgoConnect} from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({providerEnv: 'TestNet', MyAlgoConnect}));

const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Player 1 wins', 'Player 2 wins', 'Draw'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async seeFinger()  {
    const finger = await new Promise(resolveFinger => {
      this.setState({view: 'GetHand', playable: true, resolveFinger});
    });
    this.setState({view: 'GetGuess', finger});
    return finger;
  }
  async guessAmount()  {
    const guess = await new Promise(resolveGuess => {
      this.setState({view: 'GetGuess', playable: true, resolveGuess});
    });
    this.setState({view: 'WaitingForResults', guess});
    return guess;
  }
  seeOutcome(outcome) {
    console.log("outcome"+outcome);
    this.setState({view: 'Done', result: intToOutcome[outcome]});
  }
  informTimeout() {
      console.log(this.setState({view: 'Timeout'}));
  }
  playFinger(finger) { this.state.resolveFinger(finger); }
  playGuess(guess) { this.state.resolveGuess(guess); }
  // async getHand() { // Fun([], UInt)
  //   const hand = await new Promise(resolveHandP => {
  //     this.setState({view: 'GetHand', playable: true, resolveHandP});
  //   });
  //   this.setState({view: 'WaitingForResults', hand});
  //   return handToInt[hand];
  // }
  // seeOutcome(i) { this.setState({view: 'Done', outcome: intToOutcome[i]}); }
  // informTimeout() { this.setState({view: 'Timeout'}); }
  // playHand(hand) { this.state.resolveHandP(hand); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }
  setWager(bet) { this.setState({view: 'Deploy', bet}); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.bet = reach.parseCurrency(this.state.bet); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Player1(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    console.log("watiting for attacher");
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    console.log(ctc);
    backend.Player2(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    console.log("Accepting wager")
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);