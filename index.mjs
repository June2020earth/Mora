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

const Player = (who) => ({
    seeFinger: () => {
        const finger = Math.floor(Math.random()*5);
        console.log(`${who} had played finger ${finger}`)
        return finger;
    },
    seeOutcome: (outcome) =>{
        console.log(`${who} see the outcome of ${OUTCOME[outcome]}`)
    }

})

await Promise.all([
    backend.Player1(ctcPlayer1,{
        ...Player('Player1'),
    }),
    backend.Player2(ctcPlayer2,{
        ...Player('Player2'),
    })
]);

console.log("Program exit");




