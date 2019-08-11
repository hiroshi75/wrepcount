import * as actionTypes from '../utils/actionTypes';


// export const NUM_CHANGE="NUM_CHANGE";
export const onNumChange = (evInfo)=>{
    //console.log("ONNUMCHANGE");console.log(evInfo); 
    return {
    type: actionTypes.NUM_CHANGE,
    evInfo: evInfo
};};
// export const CLICK_CALC="CLICK_CALC";
export const onClickCalc = ()=>({
    type: actionTypes.CLICK_CALC
});
