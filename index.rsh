'reach 0.1'

const Player = {
    seeFinger: Fun([],UInt),
    seeOutcome: Fun([UInt], Null),
}
export const main = Reach.App(()=>{
    const Player1 = Participant('Player1',{
        ...Player,
    });
    const Player2 = Participant('Player2',{
        ...Player,
    });
    init();
    Player1.only(()=>{
        const player1Finger = declassify(interact.seeFinger());
    });
    Player1.publish(player1Finger);
    commit();
    Player2.only(() => {
        const player2Finger = declassify(interact.seeFinger());
    });
    Player2.publish(player2Finger);

    const outcome = (player1Finger > player2Finger) ? 0 : (player1Finger < player2Finger) ? 1 : 2
    commit();
    each([Player1, Player2],() => {
        interact.seeOutcome(outcome)
    })
    exit();
})