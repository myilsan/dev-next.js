/**
 * reducer 문법 테스트
 * 
 */
"use client"

import React, {  useReducer, useState } from "react";

//reducer - state를 업데이트 한는 역활
//dispatch -  state 업데이트 위한 요구
//action  - 요구의 내용

const ACTION_TYPES = {
    deposit : "deposit",
    withdrow : "widhdraw"
}

interface DisAacton  {
    type : string;
    payload : number;
}

const reducer = (state : number, action : DisAacton) => {
    //.. 
    console.log("리듀서가 일을 합니다.",state, action);

    switch(action.type){
        case ACTION_TYPES.deposit : 
            return state + action.payload;
        case ACTION_TYPES.withdrow :
            return state - action.payload;
        default:
            return state;    
    }    
};

export default function Page(){
    const [number, setNumber]= useState(0);
    const [money, dispatch] = useReducer(reducer,0);

    return (
        <div>useReducer 은행에 오신것을 환영합니다.
            <p>잔고 : {money}원</p>
            <input type="number" value={number} onChange={(e:React.ChangeEvent<HTMLElement>)=>setNumber(parseInt(e.target.value))} step="1000" />
            <button 
                onClick={()=>{
                dispatch({type:ACTION_TYPES.deposit,payload : number});
            }}>입금 
            </button>
            <button
              onClick={()=>{
                dispatch({type:ACTION_TYPES.withdrow,payload : number});
            }}>출금</button>
        </div>
    )
}