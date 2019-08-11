import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    weight:0,
    rep:0,
    nextWeight:0,
    nextRep: 0
};

const calc = (state = initialAppState, action) =>{
    console.log("REDU");
    console.log(state);
    console.log(action);
    if(action.type===actionTypes.NUM_CHANGE){
        const {weight, rep, nextWeight} = {...state, ...action.evInfo};
        console.log("NEXT");
        console.log([weight, rep, nextWeight]);
        const nextRep = weight*rep/nextWeight || 0;
        console.log([state, nextRep]);
        console.log({
            ...state, ...{weight, rep, nextWeight, nextRep}
        });
        return {
            ...state, ...{weight, rep, nextWeight, nextRep}
        };
    }else if(action.type===actionTypes.CLICK_CALC){
        return {...state};

    }
    return {...state};
};

export default calc;

