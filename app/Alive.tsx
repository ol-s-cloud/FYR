"use client";
import {useEffect,useState} from "react";
const words=["FORM","FIT","MOOD","IDENTITY","YOU"];
export default function Alive(){
 const [word,setWord]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setWord(x=>(x+1)%words.length),1800);return()=>clearInterval(t)},[]);
 return <><div className="ambient" aria-hidden="true"><i/><i/><i/></div><div className="liveRail"><span>FYR / LIVE</span><span className="liveDot"/> <span>STYLE ENGINE ONLINE</span><span className="railWord">FIND {words[word]}</span></div></>
}