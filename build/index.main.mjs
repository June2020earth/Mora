// Automatically generated with Reach 0.1.12 (af6530ae)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (af6530ae)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Player1(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player1 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player1 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v208 = stdlib.protect(ctc0, interact.bet, 'for Player1\'s interact field bet');
  const v209 = stdlib.protect(ctc0, interact.deadline, 'for Player1\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v208, v209],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v208, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v213, v214], secs: v216, time: v215, didSend: v31, from: v212 } = txn1;
      
      sim_r.txns.push({
        amt: v213,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v213, v214], secs: v216, time: v215, didSend: v31, from: v212 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v221, time: v220, didSend: v37, from: v219 } = txn2;
  const v223 = stdlib.add(v213, v213);
  ;
  let v224 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
  let v225 = v220;
  let v232 = v223;
  
  let txn3 = txn2;
  while (await (async () => {
    const v236 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
    
    return v236;})()) {
    const v239 = stdlib.protect(ctc0, await interact.seeFinger(), {
      at: './index.rsh:38:54:application',
      fs: ['at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'seeFinger',
      who: 'Player1'
      });
    const v240 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:39:78:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v241 = stdlib.digest([ctc0, ctc0], [v240, v239]);
    const v243 = stdlib.protect(ctc0, await interact.guessAmount(), {
      at: './index.rsh:41:55:application',
      fs: ['at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'guessAmount',
      who: 'Player1'
      });
    const v244 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:42:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v245 = stdlib.digest([ctc0, ctc0], [v244, v243]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v212, v213, v214, v219, v232, v241, v245],
      evt_cnt: 2,
      funcNum: 3,
      lct: v225,
      onlyIf: true,
      out_tys: [ctc1, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v248, v249], secs: v251, time: v250, didSend: v64, from: v247 } = txn4;
        
        ;
        const v259 = stdlib.safeAdd(v250, v214);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v248, v249], secs: v251, time: v250, didSend: v64, from: v247 } = txn4;
    ;
    const v252 = stdlib.addressEq(v212, v247);
    stdlib.assert(v252, {
      at: './index.rsh:45:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v259 = stdlib.safeAdd(v250, v214);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v259],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v212, v213, v214, v219, v232, v248, v249, v259],
        evt_cnt: 0,
        funcNum: 5,
        lct: v250,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v317, time: v316, didSend: v152, from: v315 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v212,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v317, time: v316, didSend: v152, from: v315 } = txn6;
      ;
      const v318 = stdlib.addressEq(v212, v315);
      const v319 = stdlib.addressEq(v219, v315);
      const v320 = v318 ? true : v319;
      stdlib.assert(v320, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:51:95:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Player1'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeOut(), {
        at: './index.rsh:22:31:application',
        fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:20:29:function exp)', 'at ./index.rsh:51:95:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeOut',
        who: 'Player1'
        });
      
      return;
      
      }
    else {
      const {data: [v266, v267], secs: v269, time: v268, didSend: v76, from: v265 } = txn5;
      ;
      const v270 = stdlib.addressEq(v219, v265);
      stdlib.assert(v270, {
        at: './index.rsh:51:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player1'
        });
      const v277 = stdlib.safeAdd(v268, v214);
      const txn6 = await (ctc.sendrecv({
        args: [v212, v213, v214, v219, v232, v248, v249, v266, v277, v239, v240, v244, v243],
        evt_cnt: 4,
        funcNum: 6,
        lct: v268,
        onlyIf: true,
        out_tys: [ctc0, ctc0, ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:59:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v282, v283, v284, v285], secs: v287, time: v286, didSend: v88, from: v281 } = txn6;
          
          ;
          const v293 = stdlib.gt(v282, v266);
          const v294 = stdlib.lt(v282, v266);
          const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:62:91:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:95:decimal', stdlib.UInt_max, '2');
          const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:62:53:decimal', stdlib.UInt_max, '0') : v295;
          const cv224 = v296;
          const cv225 = v286;
          const cv232 = v232;
          
          await (async () => {
            const v224 = cv224;
            const v225 = cv225;
            const v232 = cv232;
            
            if (await (async () => {
              const v236 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
              
              return v236;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v333 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
              const v334 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v335 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
              const v336 = v333 ? v334 : v335;
              const v337 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
              const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
              const v339 = stdlib.safeMul(v337, v213);
              sim_r.txns.push({
                kind: 'from',
                to: v212,
                tok: undefined /* Nothing */
                });
              const v344 = stdlib.safeMul(v338, v213);
              sim_r.txns.push({
                kind: 'from',
                to: v219,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v277],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v212, v213, v214, v219, v232, v248, v249, v266, v277],
          evt_cnt: 0,
          funcNum: 7,
          lct: v268,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v299, time: v298, didSend: v118, from: v297 } = txn7;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v219,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v299, time: v298, didSend: v118, from: v297 } = txn7;
        ;
        const v300 = stdlib.addressEq(v212, v297);
        const v301 = stdlib.addressEq(v219, v297);
        const v302 = v300 ? true : v301;
        stdlib.assert(v302, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:59:131:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player1'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:22:31:application',
          fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:20:29:function exp)', 'at ./index.rsh:59:131:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Player1'
          });
        
        return;
        
        }
      else {
        const {data: [v282, v283, v284, v285], secs: v287, time: v286, didSend: v88, from: v281 } = txn6;
        ;
        const v288 = stdlib.addressEq(v212, v281);
        stdlib.assert(v288, {
          at: './index.rsh:59:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const v289 = stdlib.digest([ctc0, ctc0], [v283, v282]);
        const v290 = stdlib.digestEq(v248, v289);
        stdlib.assert(v290, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:60:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player1'
          });
        const v291 = stdlib.digest([ctc0, ctc0], [v284, v285]);
        const v292 = stdlib.digestEq(v249, v291);
        stdlib.assert(v292, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:61:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player1'
          });
        const v293 = stdlib.gt(v282, v266);
        const v294 = stdlib.lt(v282, v266);
        const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:62:91:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:95:decimal', stdlib.UInt_max, '2');
        const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:62:53:decimal', stdlib.UInt_max, '0') : v295;
        const cv224 = v296;
        const cv225 = v286;
        const cv232 = v232;
        
        v224 = cv224;
        v225 = cv225;
        v232 = cv232;
        
        txn3 = txn6;
        continue;}
      
      }
    
    
    
    }
  const v333 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
  const v334 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v335 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v336 = v333 ? v334 : v335;
  const v337 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
  const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
  const v339 = stdlib.safeMul(v337, v213);
  ;
  const v344 = stdlib.safeMul(v338, v213);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v224), {
    at: './index.rsh:78:28:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:32:function exp)'],
    msg: 'seeOutcome',
    who: 'Player1'
    });
  
  return;
  
  
  
  
  };
export async function Player2(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Player2 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Player2 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v213, v214], secs: v216, time: v215, didSend: v31, from: v212 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v212, v213, v214],
    evt_cnt: 0,
    funcNum: 1,
    lct: v215,
    onlyIf: true,
    out_tys: [],
    pay: [v213, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v221, time: v220, didSend: v37, from: v219 } = txn2;
      
      const v223 = stdlib.add(v213, v213);
      sim_r.txns.push({
        amt: v213,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v224 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
      const v225 = v220;
      const v232 = v223;
      
      if (await (async () => {
        const v236 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
        
        return v236;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v333 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
        const v334 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v335 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v336 = v333 ? v334 : v335;
        const v337 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
        const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
        const v339 = stdlib.safeMul(v337, v213);
        sim_r.txns.push({
          kind: 'from',
          to: v212,
          tok: undefined /* Nothing */
          });
        const v344 = stdlib.safeMul(v338, v213);
        sim_r.txns.push({
          kind: 'from',
          to: v219,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v221, time: v220, didSend: v37, from: v219 } = txn2;
  const v223 = stdlib.add(v213, v213);
  ;
  let v224 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
  let v225 = v220;
  let v232 = v223;
  
  let txn3 = txn2;
  while (await (async () => {
    const v236 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
    
    return v236;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc1, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v248, v249], secs: v251, time: v250, didSend: v64, from: v247 } = txn4;
    ;
    const v252 = stdlib.addressEq(v212, v247);
    stdlib.assert(v252, {
      at: './index.rsh:45:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v259 = stdlib.safeAdd(v250, v214);
    const v263 = stdlib.protect(ctc0, await interact.seeFinger(), {
      at: './index.rsh:48:64:application',
      fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
      msg: 'seeFinger',
      who: 'Player2'
      });
    const v264 = stdlib.protect(ctc0, await interact.guessAmount(), {
      at: './index.rsh:49:65:application',
      fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
      msg: 'guessAmount',
      who: 'Player2'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v212, v213, v214, v219, v232, v248, v249, v259, v263, v264],
      evt_cnt: 2,
      funcNum: 4,
      lct: v250,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v266, v267], secs: v269, time: v268, didSend: v76, from: v265 } = txn5;
        
        ;
        const v277 = stdlib.safeAdd(v268, v214);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v259],
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v212, v213, v214, v219, v232, v248, v249, v259],
        evt_cnt: 0,
        funcNum: 5,
        lct: v250,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v317, time: v316, didSend: v152, from: v315 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v212,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v317, time: v316, didSend: v152, from: v315 } = txn6;
      ;
      const v318 = stdlib.addressEq(v212, v315);
      const v319 = stdlib.addressEq(v219, v315);
      const v320 = v318 ? true : v319;
      stdlib.assert(v320, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:51:95:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Player2'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeOut(), {
        at: './index.rsh:22:31:application',
        fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:20:29:function exp)', 'at ./index.rsh:51:95:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeOut',
        who: 'Player2'
        });
      
      return;
      
      }
    else {
      const {data: [v266, v267], secs: v269, time: v268, didSend: v76, from: v265 } = txn5;
      ;
      const v270 = stdlib.addressEq(v219, v265);
      stdlib.assert(v270, {
        at: './index.rsh:51:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player2'
        });
      const v277 = stdlib.safeAdd(v268, v214);
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 6,
        out_tys: [ctc0, ctc0, ctc0, ctc0],
        timeoutAt: ['time', v277],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v212, v213, v214, v219, v232, v248, v249, v266, v277],
          evt_cnt: 0,
          funcNum: 7,
          lct: v268,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v299, time: v298, didSend: v118, from: v297 } = txn7;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v219,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v299, time: v298, didSend: v118, from: v297 } = txn7;
        ;
        const v300 = stdlib.addressEq(v212, v297);
        const v301 = stdlib.addressEq(v219, v297);
        const v302 = v300 ? true : v301;
        stdlib.assert(v302, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:59:131:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Player2'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeOut(), {
          at: './index.rsh:22:31:application',
          fs: ['at ./index.rsh:21:13:application call to [unknown function] (defined at: ./index.rsh:21:34:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:20:29:function exp)', 'at ./index.rsh:59:131:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Player2'
          });
        
        return;
        
        }
      else {
        const {data: [v282, v283, v284, v285], secs: v287, time: v286, didSend: v88, from: v281 } = txn6;
        ;
        const v288 = stdlib.addressEq(v212, v281);
        stdlib.assert(v288, {
          at: './index.rsh:59:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const v289 = stdlib.digest([ctc0, ctc0], [v283, v282]);
        const v290 = stdlib.digestEq(v248, v289);
        stdlib.assert(v290, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:60:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player2'
          });
        const v291 = stdlib.digest([ctc0, ctc0], [v284, v285]);
        const v292 = stdlib.digestEq(v249, v291);
        stdlib.assert(v292, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:61:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player2'
          });
        const v293 = stdlib.gt(v282, v266);
        const v294 = stdlib.lt(v282, v266);
        const v295 = v294 ? stdlib.checkedBigNumberify('./index.rsh:62:91:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:95:decimal', stdlib.UInt_max, '2');
        const v296 = v293 ? stdlib.checkedBigNumberify('./index.rsh:62:53:decimal', stdlib.UInt_max, '0') : v295;
        const cv224 = v296;
        const cv225 = v286;
        const cv232 = v232;
        
        v224 = cv224;
        v225 = cv225;
        v232 = cv232;
        
        txn3 = txn6;
        continue;}
      
      }
    
    
    
    }
  const v333 = stdlib.eq(v224, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
  const v334 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v335 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v336 = v333 ? v334 : v335;
  const v337 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
  const v338 = v336[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
  const v339 = stdlib.safeMul(v337, v213);
  ;
  const v344 = stdlib.safeMul(v338, v213);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v224), {
    at: './index.rsh:78:28:application',
    fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:32:function exp)'],
    msg: 'seeOutcome',
    who: 'Player2'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByANAAEIB1AFICgEmAECoAEDJgMBAAEBACI1ADEYQQRUKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEIDEACEUmBBgxAAQVJJQxAAFUlEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE4huzqbAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgN0SCU0ARJENARJIhJMNAISEUQoZClkUEk1A0lXACA1/yEJWzX+STUFSUoiWzX9JFs1/IEQWzX7gRhbNfqABMavJEQ0/RZQNPwWUDT7FlA0+hZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNPwWNP0WUAESRDQDV3ggNPsWNPoWUAESRDT/NAMhBls0AyEHWzQDVzAgIQojNP00/gxNIjT9NP4NTTIGNAMhBFtCAjhJIQUMQABUSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEzJmSXLAyBjQDIQlbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgJvSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBls1/iEHWzX9VzAgNfwhBFs1+1dYIDX6V3ggNflJNQVJIls1+CRbNfeABBBGrXM0+BZQNPcWULAyBjQDIQlbDEQ0/DEAEkQyBjT9CDX2NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQNPYWUChLAVcAf2cpSwFXfylnSCU1ATIGNQJCAeFJIwxAANlJIQwMQACQSCEINAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQdbNf1XMCA1/CEEWzX7STUFSVcAIDX6VyAgNfmABB5uguM0+lA0+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEFNQEyBjUCQgFEIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwNP+IAW00A1cAIDT/NAMhB1sxACEKMgY0/0kIQgBUSIGgjQaIAUwiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IARwxADT/FlA0/hZQKEsBVwAwZ0gjNQEyBjUCQgCuNf81/jX9Nfw1+zX6Nfk0/SEKEkEAJDT5NPoWUDT7FlA0/FA0/xZQKEsBVwBYZ0ghCDUBMgY1AkIAdIAQAAAAAAAAAAAAAAAAAAAAAoAQAAAAAAAAAAIAAAAAAAAAADT9IhJNNfixIrIBNPgiWzT6C7III7IQNPmyB7OxIrIBNPgkWzT6C7III7IQNPyyB7NCAAAxGSEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQwxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v266",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v248",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v266",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v267",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v282",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v283",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v284",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v285",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a2e38038062001a2e833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b61174c80620002e26000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063ab53f2c6146100ff578063ad2d91d114610122578063bf2c5b2414610135578063ebdbfdcc1461014857005b80630bbf32111461008d5780631e93b0f1146100a05780632c10a159146100c457806383230757146100d757005b3661008b57005b005b61008b61009b3660046112c6565b61015b565b3480156100ac57600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100d23660046112de565b6103f2565b3480156100e357600080fd5b506001546100b1565b61008b6100fa3660046112de565b61056b565b34801561010b57600080fd5b5061011461071d565b6040516100bb9291906112f0565b61008b61013036600461135f565b6107ba565b61008b6101433660046112de565b610a45565b61008b61015636600461135f565b610be1565b61016b600760005414601d610e71565b6101858135158061017e57506001548235145b601e610e71565b60008080556002805461019790611382565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390611382565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050806020019051810190610228919061140b565b905061023c8161010001514310601f610e71565b604080513381528335602080830191909152840135818301529083013560608083019190915283013560808083019190915283013560a08201527f7b1ba7c0afb46a34a8d786dc1c0a10c44e929c4a52005b7370d491a61bba7c079060c00160405180910390a16102af34156019610e71565b80516102c7906001600160a01b03163314601a610e71565b60408051610314916102ee9190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a0015114601b610e71565b60408051606084810135602083015260808501359282019290925261035a91016040516020818303038152906040528051906020012060001c8260c0015114601c610e71565b610362611135565b815181516001600160a01b03918216905260208084015183518201526040808501518451909101526060808501518451931692019190915260e083015190840135116103c55760e08201516020840135106103be5760026103c8565b60016103c8565b60005b602080830180519290925281514391015260808301519051604001526103ed81610e97565b505050565b6104026001600054146009610e71565b61041c8135158061041557506001548235145b600a610e71565b60008080556002805461042e90611382565b80601f016020809104026020016040519081016040528092919081815260200182805461045a90611382565b80156104a75780601f1061047c576101008083540402835291602001916104a7565b820191906000526020600020905b81548152906001019060200180831161048a57829003601f168201915b50505050508060200190518101906104bf9190611494565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516104f2929190611503565b60405180910390a161050b816020015134146008610e71565b610513611135565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516002905251439201919091525180016020820151604001526103ed81610e97565b61057b6005600054146016610e71565b6105958135158061058e57506001548235145b6017610e71565b6000808055600280546105a790611382565b80601f01602080910402602001604051908101604052809291908181526020018280546105d390611382565b80156106205780601f106105f557610100808354040283529160200191610620565b820191906000526020600020905b81548152906001019060200180831161060357829003601f168201915b50505050508060200190518101906106389190611540565b905061064c8160e001514310156018610e71565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161067d929190611503565b60405180910390a161069134156014610e71565b80516106c5906001600160a01b031633146106bb5760608201516001600160a01b031633146106be565b60015b6015610e71565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610702573d6000803e3d6000fd5b50600080805560018190556107199060029061118e565b5050565b60006060600054600280805461073290611382565b80601f016020809104026020016040519081016040528092919081815260200182805461075e90611382565b80156107ab5780601f10610780576101008083540402835291602001916107ab565b820191906000526020600020905b81548152906001019060200180831161078e57829003601f168201915b50505050509050915091509091565b6107ca600460005414600d610e71565b6107e4813515806107dd57506001548235145b600e610e71565b6000808055600280546107f690611382565b80601f016020809104026020016040519081016040528092919081815260200182805461082290611382565b801561086f5780601f106108445761010080835404028352916020019161086f565b820191906000526020600020905b81548152906001019060200180831161085257829003601f168201915b505050505080602001905181019061088791906115ec565b905061089f6040518060200160405280600081525090565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d163433846040516108d0929190611676565b60405180910390a16108e43415600b610e71565b81516108fc906001600160a01b03163314600c610e71565b61090a438360400151611083565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e08401526005600055436001559051610a1a9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610a3e9291906111cb565b5050505050565b610a556007600054146022610e71565b610a6f81351580610a6857506001548235145b6023610e71565b600080805560028054610a8190611382565b80601f0160208091040260200160405190810160405280929190818152602001828054610aad90611382565b8015610afa5780601f10610acf57610100808354040283529160200191610afa565b820191906000526020600020905b815481529060010190602001808311610add57829003601f168201915b5050505050806020019051810190610b12919061140b565b9050610b278161010001514310156024610e71565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610b58929190611503565b60405180910390a1610b6c34156020610e71565b8051610ba0906001600160a01b03163314610b965760608201516001600160a01b03163314610b99565b60015b6021610e71565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610702573d6000803e3d6000fd5b610bf16005600054146011610e71565b610c0b81351580610c0457506001548235145b6012610e71565b600080805560028054610c1d90611382565b80601f0160208091040260200160405190810160405280929190818152602001828054610c4990611382565b8015610c965780601f10610c6b57610100808354040283529160200191610c96565b820191906000526020600020905b815481529060010190602001808311610c7957829003601f168201915b5050505050806020019051810190610cae9190611540565b9050610cc66040518060200160405280600081525090565b610cd78260e0015143106013610e71565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610d08929190611676565b60405180910390a1610d1c3415600f610e71565b6060820151610d37906001600160a01b031633146010610e71565b610d45438360400151611083565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015283516101008401526007600055436001559051610a1a9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b816107195760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610e9f61124f565b60208201515160021415610f9d57610ef16040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182526004600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c00160405160208183030381529060405260029080519060200190610f979291906111cb565b50505050565b8051600290819052815160006020918201819052818401805191909152518101919091528201515115610fd4578060200151610fd7565b80515b604082018190528251805191516020909101516001600160a01b03909216916108fc91611003916110d6565b6040518115909202916000818181858888f1935050505015801561102b573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc61105b8360400151602001518560000151602001516110d6565b6040518115909202916000818181858888f19350505050158015610702573d6000803e3d6000fd5b60008261109083826116bd565b91508110156110d05760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e8e565b92915050565b60008115806110fa575082826110ec81836116d5565b92506110f890836116f4565b145b6110d05760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610e8e565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161118960405180606001604052806000815260200160008152602001600081525090565b905290565b50805461119a90611382565b6000825580601f106111aa575050565b601f0160209004906000526020600020908101906111c891906112b1565b50565b8280546111d790611382565b90600052602060002090601f0160209004810192826111f9576000855561123f565b82601f1061121257805160ff191683800117855561123f565b8280016001018555821561123f579182015b8281111561123f578251825591602001919060010190611224565b5061124b9291506112b1565b5090565b6040805160a0810190915260006060820181815260808301919091528190815260200161128f604051806040016040528060008152602001600081525090565b8152602001611189604051806040016040528060008152602001600081525090565b5b8082111561124b57600081556001016112b2565b600060a082840312156112d857600080fd5b50919050565b6000604082840312156112d857600080fd5b82815260006020604081840152835180604085015260005b8181101561132457858101830151858201606001528201611308565b81811115611336576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156112d857600080fd5b60006060828403121561137157600080fd5b61137b838361134d565b9392505050565b600181811c9082168061139657607f821691505b602082108114156112d857634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156113e957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461140657600080fd5b919050565b6000610120828403121561141e57600080fd5b6114266113b7565b61142f836113ef565b81526020830151602082015260408301516040820152611451606084016113ef565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6000606082840312156114a657600080fd5b6040516060810181811067ffffffffffffffff821117156114d757634e487b7160e01b600052604160045260246000fd5b6040526114e3836113ef565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461153157600080fd5b80604085015250509392505050565b600061010080838503121561155457600080fd5b6040519081019067ffffffffffffffff8211818310171561158557634e487b7160e01b600052604160045260246000fd5b81604052611592846113ef565b815260208401516020820152604084015160408201526115b4606085016113ef565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a082840312156115fe57600080fd5b60405160a0810181811067ffffffffffffffff8211171561162f57634e487b7160e01b600052604160045260246000fd5b60405261163b836113ef565b8152602083015160208201526040830151604082015261165d606084016113ef565b6060820152608083015160808201528091505092915050565b6001600160a01b03831681526080810161137b60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156116d0576116d06116a7565b500190565b60008160001904831182151516156116ef576116ef6116a7565b500290565b60008261171157634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204728c4fa58b54fe0642b3c2d2937d5fa46708b6afe07bef4df9ffe9654e7f2e564736f6c634300080c0033`,
  BytecodeLen: 6702,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:46:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:51:95:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:52:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:59:131:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Player1": Player1,
  "Player2": Player2
  };
export const _APIs = {
  };
