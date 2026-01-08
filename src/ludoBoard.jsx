import { useState } from "react"
export default function LudoBoard(){
    let [Moves,setMoves]=useState({blue:0,red:0,yellow:0, green:0});
let updateBlue=()=>{
   
    console.log(Moves);
    setMoves((prevMoves)=>{
return {...prevMoves, blue:prevMoves.blue+1}
    }
        );
};
let updateyellow=()=>{
   
    console.log(Moves);
    setMoves((prevMoves)=>{
return {...prevMoves, yellow:prevMoves.yellow+1}
    }
        );
};
let updateRed=()=>{
   
    console.log(Moves);
    setMoves((prevMoves)=>{
return {...prevMoves, red:prevMoves.red+1}
    }
        );
};
let updateGreen=()=>{
   
    console.log(Moves);
    setMoves((prevMoves)=>{
return {...prevMoves, green:prevMoves.green+1}
    }
        );
};

  return (
    <div>
        <p> Game begins!</p>
        <div className="board">
    <p>Blue moves={Moves.blue}</p>
    <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
     <p>Yellow moves={Moves.yellow}</p>
    <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateyellow}>+1</button>
     <p>Red moves={Moves.red}</p>
    <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
     <p>Green moves={Moves.green}</p>
    <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        </div>
    </div>
  )  
}