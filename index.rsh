'reach 0.1'

const Player = {
    ...hasRandom,
    seeFinger: Fun([],UInt),
    guessAmount: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeOut: Fun([],Null),

}
export const main = Reach.App(()=>{
    const Player1 = Participant('Player1',{
        ...Player,
        bet: UInt,
        deadline: UInt,
    });
    const Player2 = Participant('Player2',{
        ...Player,
    });
    const informTimeOut =() => {
        each([Player1,Player2],()=>{
        interact.informTimeOut()})
    };
    init();
    Player1.only(()=>{
        const amount = declassify(interact.bet);
        const deadline = declassify(interact.deadline);
    });
    Player1.publish(amount,deadline).pay(amount);
    commit();
    Player2.pay(amount);

    var outcome = 2;
    invariant(balance()==2*amount);
    while(outcome==2){
        commit();
        Player1.only(()=>{
            const _player1Finger = interact.seeFinger();
            const [_commitPlayer1Finger, _saltPlayer1Finger] = makeCommitment(interact, _player1Finger);
            const commitPlayer1Finger = declassify(_commitPlayer1Finger);
            const _player1Guess = interact.guessAmount();
            const [_commitPlayer1Guess, _saltPlayer1Guess] = makeCommitment(interact,_player1Guess);
            const commitPlayer1Guess = declassify(_commitPlayer1Guess);
        });
        Player1.publish(commitPlayer1Finger,commitPlayer1Guess);
        commit();
        Player2.only(() => {
            const player2Finger = declassify(interact.seeFinger());
            const player2Guess = declassify(interact.guessAmount());
        });
        Player2.publish(player2Finger,player2Guess).timeout(relativeTime(deadline),()=>closeTo(Player1,informTimeOut));
        commit();
        Player1.only(()=>{
            const saltPlayer1Finger = declassify(_saltPlayer1Finger);
            const player1Finger = declassify(_player1Finger);
            const saltPlayer1Guess = declassify(_saltPlayer1Guess);
            const player1Guess = declassify(_player1Guess);
        });
        Player1.publish(player1Finger,saltPlayer1Finger,saltPlayer1Guess, player1Guess).timeout(relativeTime(deadline),()=>closeTo(Player2,informTimeOut));
        checkCommitment(commitPlayer1Finger, saltPlayer1Finger, player1Finger);
        checkCommitment(commitPlayer1Guess, saltPlayer1Guess, player1Guess);
        outcome = (player1Finger > player2Finger) ? 0 : (player1Finger < player2Finger) ? 1 : 2
        continue;
    }
    
    
    

    const [forPlayer1, forPlayer2] =
        outcome == 0 ? [2, 0]:
                        [0, 2]
        
    transfer(forPlayer1 * amount).to(Player1);
    transfer(forPlayer2 * amount).to(Player2);
    commit();

    each([Player1, Player2],() => {
        interact.seeOutcome(outcome)
    })
    exit();
})