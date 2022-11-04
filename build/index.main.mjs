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
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
  
  
  const v212 = stdlib.protect(ctc0, interact.bet, 'for Player1\'s interact field bet');
  const v213 = stdlib.protect(ctc0, interact.deadline, 'for Player1\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v212, v213],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v212, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v217, v218], secs: v220, time: v219, didSend: v31, from: v216 } = txn1;
      
      sim_r.txns.push({
        amt: v217,
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
  const {data: [v217, v218], secs: v220, time: v219, didSend: v31, from: v216 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v225, time: v224, didSend: v37, from: v223 } = txn2;
  const v227 = stdlib.add(v217, v217);
  ;
  let v228 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
  let v229 = v224;
  let v236 = v227;
  
  let txn3 = txn2;
  while (await (async () => {
    const v240 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
    
    return v240;})()) {
    const v243 = stdlib.protect(ctc0, await interact.seeFinger(), {
      at: './index.rsh:38:54:application',
      fs: ['at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'seeFinger',
      who: 'Player1'
      });
    const v244 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:39:78:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v245 = stdlib.digest([ctc0, ctc0], [v244, v243]);
    const v247 = stdlib.protect(ctc0, await interact.guessAmount(), {
      at: './index.rsh:41:55:application',
      fs: ['at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'guessAmount',
      who: 'Player1'
      });
    const v248 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:42:76:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:37:21:application call to [unknown function] (defined at: ./index.rsh:37:24:function exp)'],
      msg: 'random',
      who: 'Player1'
      });
    const v249 = stdlib.digest([ctc0, ctc0], [v248, v247]);
    
    const txn4 = await (ctc.sendrecv({
      args: [v216, v217, v218, v223, v236, v245, v249],
      evt_cnt: 2,
      funcNum: 3,
      lct: v229,
      onlyIf: true,
      out_tys: [ctc1, ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:45:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v252, v253], secs: v255, time: v254, didSend: v64, from: v251 } = txn4;
        
        ;
        const v263 = stdlib.safeAdd(v254, v218);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v252, v253], secs: v255, time: v254, didSend: v64, from: v251 } = txn4;
    ;
    const v256 = stdlib.addressEq(v216, v251);
    stdlib.assert(v256, {
      at: './index.rsh:45:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player1'
      });
    const v263 = stdlib.safeAdd(v254, v218);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 4,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v263],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v216, v217, v218, v223, v236, v252, v253, v263],
        evt_cnt: 0,
        funcNum: 5,
        lct: v254,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v323, time: v322, didSend: v154, from: v321 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v216,
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
      const {data: [], secs: v323, time: v322, didSend: v154, from: v321 } = txn6;
      ;
      const v324 = stdlib.addressEq(v216, v321);
      const v325 = stdlib.addressEq(v223, v321);
      const v326 = v324 ? true : v325;
      stdlib.assert(v326, {
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
      const {data: [v270, v271], secs: v273, time: v272, didSend: v76, from: v269 } = txn5;
      ;
      const v274 = stdlib.addressEq(v223, v269);
      stdlib.assert(v274, {
        at: './index.rsh:51:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player1'
        });
      const v281 = stdlib.safeAdd(v272, v218);
      const txn6 = await (ctc.sendrecv({
        args: [v216, v217, v218, v223, v236, v252, v253, v270, v271, v281, v243, v244, v248, v247],
        evt_cnt: 4,
        funcNum: 6,
        lct: v272,
        onlyIf: true,
        out_tys: [ctc0, ctc0, ctc0, ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:59:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v286, v287, v288, v289], secs: v291, time: v290, didSend: v88, from: v285 } = txn6;
          
          ;
          const v297 = stdlib.safeAdd(v286, v270);
          const v298 = stdlib.eq(v289, v297);
          let v299;
          if (v298) {
            v299 = stdlib.checkedBigNumberify('./index.rsh:62:69:decimal', stdlib.UInt_max, '0');
            }
          else {
            const v301 = stdlib.eq(v271, v297);
            const v302 = v301 ? stdlib.checkedBigNumberify('./index.rsh:62:123:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:127:decimal', stdlib.UInt_max, '2');
            v299 = v302;
            }
          const cv228 = v299;
          const cv229 = v290;
          const cv236 = v236;
          
          await (async () => {
            const v228 = cv228;
            const v229 = cv229;
            const v236 = cv236;
            
            if (await (async () => {
              const v240 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
              
              return v240;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v339 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
              const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v341 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
              const v342 = v339 ? v340 : v341;
              const v343 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
              const v344 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
              const v345 = stdlib.safeMul(v343, v217);
              sim_r.txns.push({
                kind: 'from',
                to: v216,
                tok: undefined /* Nothing */
                });
              const v350 = stdlib.safeMul(v344, v217);
              sim_r.txns.push({
                kind: 'from',
                to: v223,
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
        timeoutAt: ['time', v281],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v216, v217, v218, v223, v236, v252, v253, v270, v271, v281],
          evt_cnt: 0,
          funcNum: 7,
          lct: v272,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v305, time: v304, didSend: v120, from: v303 } = txn7;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v223,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v305, time: v304, didSend: v120, from: v303 } = txn7;
        ;
        const v306 = stdlib.addressEq(v216, v303);
        const v307 = stdlib.addressEq(v223, v303);
        const v308 = v306 ? true : v307;
        stdlib.assert(v308, {
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
        const {data: [v286, v287, v288, v289], secs: v291, time: v290, didSend: v88, from: v285 } = txn6;
        ;
        const v292 = stdlib.addressEq(v216, v285);
        stdlib.assert(v292, {
          at: './index.rsh:59:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player1'
          });
        const v293 = stdlib.digest([ctc0, ctc0], [v287, v286]);
        const v294 = stdlib.digestEq(v252, v293);
        stdlib.assert(v294, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:60:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player1'
          });
        const v295 = stdlib.digest([ctc0, ctc0], [v288, v289]);
        const v296 = stdlib.digestEq(v253, v295);
        stdlib.assert(v296, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:61:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player1'
          });
        const v297 = stdlib.safeAdd(v286, v270);
        const v298 = stdlib.eq(v289, v297);
        let v299;
        if (v298) {
          v299 = stdlib.checkedBigNumberify('./index.rsh:62:69:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v301 = stdlib.eq(v271, v297);
          const v302 = v301 ? stdlib.checkedBigNumberify('./index.rsh:62:123:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:127:decimal', stdlib.UInt_max, '2');
          v299 = v302;
          }
        const cv228 = v299;
        const cv229 = v290;
        const cv236 = v236;
        
        v228 = cv228;
        v229 = cv229;
        v236 = cv236;
        
        txn3 = txn6;
        continue;}
      
      }
    
    
    
    }
  const v339 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
  const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v341 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v342 = v339 ? v340 : v341;
  const v343 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
  const v344 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
  const v345 = stdlib.safeMul(v343, v217);
  ;
  const v350 = stdlib.safeMul(v344, v217);
  ;
  const v359 = stdlib.safeAdd(v228, stdlib.checkedBigNumberify('./index.rsh:78:37:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc2, await interact.seeOutcome(v359), {
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
  const {data: [v217, v218], secs: v220, time: v219, didSend: v31, from: v216 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v216, v217, v218],
    evt_cnt: 0,
    funcNum: 1,
    lct: v219,
    onlyIf: true,
    out_tys: [],
    pay: [v217, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v225, time: v224, didSend: v37, from: v223 } = txn2;
      
      const v227 = stdlib.add(v217, v217);
      sim_r.txns.push({
        amt: v217,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v228 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
      const v229 = v224;
      const v236 = v227;
      
      if (await (async () => {
        const v240 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
        
        return v240;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v339 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
        const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v341 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v342 = v339 ? v340 : v341;
        const v343 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
        const v344 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
        const v345 = stdlib.safeMul(v343, v217);
        sim_r.txns.push({
          kind: 'from',
          to: v216,
          tok: undefined /* Nothing */
          });
        const v350 = stdlib.safeMul(v344, v217);
        sim_r.txns.push({
          kind: 'from',
          to: v223,
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
  const {data: [], secs: v225, time: v224, didSend: v37, from: v223 } = txn2;
  const v227 = stdlib.add(v217, v217);
  ;
  let v228 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2');
  let v229 = v224;
  let v236 = v227;
  
  let txn3 = txn2;
  while (await (async () => {
    const v240 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:35:20:decimal', stdlib.UInt_max, '2'));
    
    return v240;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc1, ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v252, v253], secs: v255, time: v254, didSend: v64, from: v251 } = txn4;
    ;
    const v256 = stdlib.addressEq(v216, v251);
    stdlib.assert(v256, {
      at: './index.rsh:45:17:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Player2'
      });
    const v263 = stdlib.safeAdd(v254, v218);
    const v267 = stdlib.protect(ctc0, await interact.seeFinger(), {
      at: './index.rsh:48:64:application',
      fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
      msg: 'seeFinger',
      who: 'Player2'
      });
    const v268 = stdlib.protect(ctc0, await interact.guessAmount(), {
      at: './index.rsh:49:65:application',
      fs: ['at ./index.rsh:47:21:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
      msg: 'guessAmount',
      who: 'Player2'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v216, v217, v218, v223, v236, v252, v253, v263, v267, v268],
      evt_cnt: 2,
      funcNum: 4,
      lct: v254,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:17:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v270, v271], secs: v273, time: v272, didSend: v76, from: v269 } = txn5;
        
        ;
        const v281 = stdlib.safeAdd(v272, v218);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v263],
      tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v216, v217, v218, v223, v236, v252, v253, v263],
        evt_cnt: 0,
        funcNum: 5,
        lct: v254,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v323, time: v322, didSend: v154, from: v321 } = txn6;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v216,
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
      const {data: [], secs: v323, time: v322, didSend: v154, from: v321 } = txn6;
      ;
      const v324 = stdlib.addressEq(v216, v321);
      const v325 = stdlib.addressEq(v223, v321);
      const v326 = v324 ? true : v325;
      stdlib.assert(v326, {
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
      const {data: [v270, v271], secs: v273, time: v272, didSend: v76, from: v269 } = txn5;
      ;
      const v274 = stdlib.addressEq(v223, v269);
      stdlib.assert(v274, {
        at: './index.rsh:51:17:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Player2'
        });
      const v281 = stdlib.safeAdd(v272, v218);
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 4,
        funcNum: 6,
        out_tys: [ctc0, ctc0, ctc0, ctc0],
        timeoutAt: ['time', v281],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v216, v217, v218, v223, v236, v252, v253, v270, v271, v281],
          evt_cnt: 0,
          funcNum: 7,
          lct: v272,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v305, time: v304, didSend: v120, from: v303 } = txn7;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v223,
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
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v305, time: v304, didSend: v120, from: v303 } = txn7;
        ;
        const v306 = stdlib.addressEq(v216, v303);
        const v307 = stdlib.addressEq(v223, v303);
        const v308 = v306 ? true : v307;
        stdlib.assert(v308, {
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
        const {data: [v286, v287, v288, v289], secs: v291, time: v290, didSend: v88, from: v285 } = txn6;
        ;
        const v292 = stdlib.addressEq(v216, v285);
        stdlib.assert(v292, {
          at: './index.rsh:59:17:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Player2'
          });
        const v293 = stdlib.digest([ctc0, ctc0], [v287, v286]);
        const v294 = stdlib.digestEq(v252, v293);
        stdlib.assert(v294, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:60:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player2'
          });
        const v295 = stdlib.digest([ctc0, ctc0], [v288, v289]);
        const v296 = stdlib.digestEq(v253, v295);
        stdlib.assert(v296, {
          at: 'reach standard library:69:17:application',
          fs: ['at ./index.rsh:61:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
          msg: null,
          who: 'Player2'
          });
        const v297 = stdlib.safeAdd(v286, v270);
        const v298 = stdlib.eq(v289, v297);
        let v299;
        if (v298) {
          v299 = stdlib.checkedBigNumberify('./index.rsh:62:69:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v301 = stdlib.eq(v271, v297);
          const v302 = v301 ? stdlib.checkedBigNumberify('./index.rsh:62:123:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:62:127:decimal', stdlib.UInt_max, '2');
          v299 = v302;
          }
        const cv228 = v299;
        const cv229 = v290;
        const cv236 = v236;
        
        v228 = cv228;
        v229 = cv229;
        v236 = cv236;
        
        txn3 = txn6;
        continue;}
      
      }
    
    
    
    }
  const v339 = stdlib.eq(v228, stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '0'));
  const v340 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v341 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v342 = v339 ? v340 : v341;
  const v343 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '0')];
  const v344 = v342[stdlib.checkedBigNumberify('./index.rsh:69:11:array', stdlib.UInt_max, '1')];
  const v345 = stdlib.safeMul(v343, v217);
  ;
  const v350 = stdlib.safeMul(v344, v217);
  ;
  const v362 = stdlib.safeAdd(v228, stdlib.checkedBigNumberify('./index.rsh:78:37:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc2, await interact.seeOutcome(v362), {
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
  appApproval: `ByANAAEIB1AFICgEmAECqAEDJgMBAAEBACI1ADEYQQRrKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEIDEACKEmBBgxAARhJJQxAAFUlEkQlNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AE4huzqbAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgOLSCU0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSUoiWzX+JFs1/YEQWzX8gRhbNfuABMavJEQ0/hZQNP0WUDT8FlA0+xZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNP0WNP4WUAESRDQDV3ggNPwWNPsWUAESRDT+NAMhCVsINfo0+zT6EkEABiI1+UIADyEKIzQDgaABWzT6Ek01+TT/NAMhBls0AyEHWzQDVzAgNPkyBjQDIQRbQgI8SSEFDEAAVEghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABMyZklywMgY0AyEJWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0ICc0ghBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQZbNf4hB1s1/VcwIDX8IQRbNftXWCA1+ld4IDX5STUFSSJbNfgkWzX3gAQQRq1zNPgWUDT3FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIJTUBMgY1AkIB4UkjDEAA2UkhDAxAAJBIIQg0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQZbNf4hB1s1/VcwIDX8IQRbNftJNQVJVwAgNfpXICA1+YAEHm6C4zT6UDT5ULA0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQU1ATIGNQJCAUQjEkQjNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEmouRdLA0/4gBbTQDVwAgNP80AyEHWzEAIQoyBjT/SQhCAFRIgaCNBogBTCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/4gBHDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCAK41/zX+Nf01/DX7Nfo1+TT9IQoSQQAkNPk0+hZQNPsWUDT8UDT/FlAoSwFXAFhnSCEINQEyBjUCQgB0gBAAAAAAAAAAAAAAAAAAAAACgBAAAAAAAAAAAgAAAAAAAAAANP0iEk01+LEisgE0+CJbNPoLsggjshA0+bIHs7EisgE0+CRbNPoLsggjshA0/LIHs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhDDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v218",
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
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v218",
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
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
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
                "name": "v270",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v271",
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
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
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
                "name": "v252",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v253",
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
                "name": "v270",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v271",
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
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v289",
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
  Bytecode: `0x608060405260405162001aaa38038062001aaa833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b6117c880620002e26000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063ab53f2c6146100ff578063ad2d91d114610122578063bf2c5b2414610135578063ebdbfdcc1461014857005b80630bbf32111461008d5780631e93b0f1146100a05780632c10a159146100c457806383230757146100d757005b3661008b57005b005b61008b61009b3660046112af565b61015b565b3480156100ac57600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100d23660046112c7565b610432565b3480156100e357600080fd5b506001546100b1565b61008b6100fa3660046112c7565b6105b0565b34801561010b57600080fd5b50610114610762565b6040516100bb9291906112d9565b61008b610130366004611348565b6107ff565b61008b6101433660046112c7565b610a8a565b61008b610156366004611348565b610c26565b61016b600760005414601d610e60565b6101858135158061017e57506001548235145b601e610e60565b6000808055600280546101979061136b565b80601f01602080910402602001604051908101604052809291908181526020018280546101c39061136b565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b505050505080602001905181019061022891906113f4565b9050610247604051806040016040528060008152602001600081525090565b6102598261012001514310601f610e60565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527f7b1ba7c0afb46a34a8d786dc1c0a10c44e929c4a52005b7370d491a61bba7c079060c00160405180910390a16102cc34156019610e60565b81516102e4906001600160a01b03163314601a610e60565b604080516103319161030b9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114601b610e60565b60408051606085810135602083015260808601359282019290925261037791016040516020818303038152906040528051906020012060001c8360c0015114601c610e60565b61038c83602001600001358360e00151610e86565b808252608084013514156103a657600060208201526103c3565b8051610100830151146103ba5760026103bd565b60015b60208201525b6103cb61111e565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283810151818401805191909152805143920191909152608085015190519091015261042c81610ed9565b50505050565b6104426001600054146009610e60565b61045c8135158061045557506001548235145b600a610e60565b60008080556002805461046e9061136b565b80601f016020809104026020016040519081016040528092919081815260200182805461049a9061136b565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b50505050508060200190518101906104ff9190611489565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516105329291906114f8565b60405180910390a161054b816020015134146008610e60565b61055361111e565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516002905251439201919091525180016020820151604001526105ab81610ed9565b505050565b6105c06005600054146016610e60565b6105da813515806105d357506001548235145b6017610e60565b6000808055600280546105ec9061136b565b80601f01602080910402602001604051908101604052809291908181526020018280546106189061136b565b80156106655780601f1061063a57610100808354040283529160200191610665565b820191906000526020600020905b81548152906001019060200180831161064857829003601f168201915b505050505080602001905181019061067d9190611535565b90506106918160e001514310156018610e60565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516106c29291906114f8565b60405180910390a16106d634156014610e60565b805161070a906001600160a01b031633146107005760608201516001600160a01b03163314610703565b60015b6015610e60565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610747573d6000803e3d6000fd5b506000808055600181905561075e90600290611177565b5050565b6000606060005460028080546107779061136b565b80601f01602080910402602001604051908101604052809291908181526020018280546107a39061136b565b80156107f05780601f106107c5576101008083540402835291602001916107f0565b820191906000526020600020905b8154815290600101906020018083116107d357829003601f168201915b50505050509050915091509091565b61080f600460005414600d610e60565b6108298135158061082257506001548235145b600e610e60565b60008080556002805461083b9061136b565b80601f01602080910402602001604051908101604052809291908181526020018280546108679061136b565b80156108b45780601f10610889576101008083540402835291602001916108b4565b820191906000526020600020905b81548152906001019060200180831161089757829003601f168201915b50505050508060200190518101906108cc91906115e1565b90506108e46040518060200160405280600081525090565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634338460405161091592919061166b565b60405180910390a16109293415600b610e60565b8151610941906001600160a01b03163314600c610e60565b61094f438360400151610e86565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e08401526005600055436001559051610a5f9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610a839291906111b4565b5050505050565b610a9a6007600054146022610e60565b610ab481351580610aad57506001548235145b6023610e60565b600080805560028054610ac69061136b565b80601f0160208091040260200160405190810160405280929190818152602001828054610af29061136b565b8015610b3f5780601f10610b1457610100808354040283529160200191610b3f565b820191906000526020600020905b815481529060010190602001808311610b2257829003601f168201915b5050505050806020019051810190610b5791906113f4565b9050610b6c8161012001514310156024610e60565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610b9d9291906114f8565b60405180910390a1610bb134156020610e60565b8051610be5906001600160a01b03163314610bdb5760608201516001600160a01b03163314610bde565b60015b6021610e60565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610747573d6000803e3d6000fd5b610c366005600054146011610e60565b610c5081351580610c4957506001548235145b6012610e60565b600080805560028054610c629061136b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c8e9061136b565b8015610cdb5780601f10610cb057610100808354040283529160200191610cdb565b820191906000526020600020905b815481529060010190602001808311610cbe57829003601f168201915b5050505050806020019051810190610cf39190611535565b9050610d0b6040518060200160405280600081525090565b610d1c8260e0015143106013610e60565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610d4d92919061166b565b60405180910390a1610d613415600f610e60565b6060820151610d7c906001600160a01b031633146010610e60565b610d8a438360400151610e86565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528582013561010084015283516101208401526007600055436001559051610a5f9183910161169c565b8161075e5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610e938382611739565b9150811015610ed35760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e7d565b92915050565b610ee1611238565b60208201515160021415610fd957610f336040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b8251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182526004600055436001558551978801989098529451938601939093529051908401525190931691810191909152905160a082015260c0016040516020818303038152906040526002908051906020019061042c9291906111b4565b8051600290819052815160006020918201819052818401805191909152518101919091528201515115611010578060200151611013565b80515b604082018190528251805191516020909101516001600160a01b03909216916108fc9161103f916110bf565b6040518115909202916000818181858888f19350505050158015611067573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc6110978360400151602001518560000151602001516110bf565b6040518115909202916000818181858888f19350505050158015610747573d6000803e3d6000fd5b60008115806110e3575082826110d58183611751565b92506110e19083611770565b145b610ed35760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610e7d565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161117260405180606001604052806000815260200160008152602001600081525090565b905290565b5080546111839061136b565b6000825580601f10611193575050565b601f0160209004906000526020600020908101906111b1919061129a565b50565b8280546111c09061136b565b90600052602060002090601f0160209004810192826111e25760008555611228565b82601f106111fb57805160ff1916838001178555611228565b82800160010185558215611228579182015b8281111561122857825182559160200191906001019061120d565b5061123492915061129a565b5090565b6040805160a08101909152600060608201818152608083019190915281908152602001611278604051806040016040528060008152602001600081525090565b8152602001611172604051806040016040528060008152602001600081525090565b5b80821115611234576000815560010161129b565b600060a082840312156112c157600080fd5b50919050565b6000604082840312156112c157600080fd5b82815260006020604081840152835180604085015260005b8181101561130d578581018301518582016060015282016112f1565b8181111561131f576000606083870101525b50601f01601f191692909201606001949350505050565b6000606082840312156112c157600080fd5b60006060828403121561135a57600080fd5b6113648383611336565b9392505050565b600181811c9082168061137f57607f821691505b602082108114156112c157634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156113d257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146113ef57600080fd5b919050565b6000610140828403121561140757600080fd5b61140f6113a0565b611418836113d8565b8152602083015160208201526040830151604082015261143a606084016113d8565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b60006060828403121561149b57600080fd5b6040516060810181811067ffffffffffffffff821117156114cc57634e487b7160e01b600052604160045260246000fd5b6040526114d8836113d8565b815260208301516020820152604083015160408201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461152657600080fd5b80604085015250509392505050565b600061010080838503121561154957600080fd5b6040519081019067ffffffffffffffff8211818310171561157a57634e487b7160e01b600052604160045260246000fd5b81604052611587846113d8565b815260208401516020820152604084015160408201526115a9606085016113d8565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060a082840312156115f357600080fd5b60405160a0810181811067ffffffffffffffff8211171561162457634e487b7160e01b600052604160045260246000fd5b604052611630836113d8565b81526020830151602082015260408301516040820152611652606084016113d8565b6060820152608083015160808201528091505092915050565b6001600160a01b03831681526080810161136460208301848035825260208082013590830152604090810135910152565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516116dc60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561174c5761174c611723565b500190565b600081600019048311821515161561176b5761176b611723565b500290565b60008261178d57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220a6fb3fc61588b0d7874251797efe409cecf0d0a8c299d98c990fdebd12da5bd264736f6c634300080c0033`,
  BytecodeLen: 6826,
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
