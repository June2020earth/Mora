import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accPlayer1, accPlayer2] = 
    await stdlib.newTestAccounts(2, startingBalance);

console.log("Users are created");

const ctcPlayer1 = accPlayer1.contract(backend);
const ctcPlayer2 = accPlayer2.contract(backend, ctcPlayer1.getInfo());

const OUTCOME = ['Player1 wins', 'Player 2 wins', 'Draw'];

const fmt = (x) =>stdlib.formatCurrency(x,4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const Player = (who) => ({
    ...stdlib.hasRandom,
    seeFinger: () => {
        const finger = Math.floor(Math.random()*5);
        console.log(`${who} had played finger ${finger}`)
        return finger;
    },
    guessAmount: () => {
        const guess = Math.floor(Math.random()*10);
        console.log(`${who} had guess ${guess} fingers`);
        return guess;
    },
    seeOutcome: (outcome) =>{
        console.log(`${who} see the outcome of ${OUTCOME[outcome]}`)
    },
    informTimeOut: ()=>{
        console.log(`${who} had timed out`);
    }

})

await Promise.all([
    backend.Player1(ctcPlayer1,{
        ...Player('Player1'),
        bet: stdlib.parseCurrency(5),
        deadline: 5,
    }),
    backend.Player2(ctcPlayer2,{
        ...Player('Player2'),
    })
]);
const balancePlayer1 = await getBalance(accPlayer1);
const balancePlayer2 = await getBalance(accPlayer2);

console.log(`Player 1 balance : ${balancePlayer1}`);
console.log(`Player 2 balance : ${balancePlayer2}`);

console.log("Program exit");




