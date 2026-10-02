"use client";
import {useMemo,useState} from "react";
type Look={name:string;note:string;total:number;items:{name:string;source:string;price:number}[]};
const presets:Look[]=[
{name:"MONO / 01",note:"Quiet, structured, all black.",total:238,items:[{name:"FYR Heavyweight Hood",source:"FYR",price:120},{name:"Wide Trouser",source:"External",price:72},{name:"Minimal Trainer",source:"External",price:46}]},
{name:"TRANSIT / 02",note:"Relaxed layers for movement.",total:196,items:[{name:"FYR Training Tee",source:"FYR",price:58},{name:"Relaxed Trouser",source:"External",price:69},{name:"Soft Carry",source:"External",price:69}]},
{name:"NIGHT / 03",note:"Reduced evening uniform.",total:284,items:[{name:"FYR Uniform Trouser",source:"FYR",price:95},{name:"Black Knit",source:"External",price:84},{name:"Leather Shoe",source:"External",price:105}]}
];
export default function Stylist(){
 const [prompt,setPrompt]=useState("Dinner. All black. Under £250.");
 const [budget,setBudget]=useState(300);
 const [retailer,setRetailer]=useState("ANY");
 const [generated,setGenerated]=useState(false);
 const [saved,setSaved]=useState<string[]>([]);
 const looks=useMemo(()=>presets.map(l=>({...l,total:Math.min(l.total,budget),note:retailer==="ANY"?l.note:l.note+" Preference: "+retailer+"."})),[budget,retailer]);
 return <main className="stylistPage">
  <section className="stylistHero"><a href="/" className="back">← FYR</a><span>FYR / STYLE ENGINE / MVP 001</span><h1>FIND<br/>YOUR LOOK.</h1><p>Describe what you want. FYR builds a direction around your brief, budget and shopping preferences.</p></section>
  <section className="styleWorkbench">
   <div className="styleBrief"><span>01 / YOUR BRIEF</span><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} aria-label="Describe your look"/><div className="control"><label>BUDGET <b>£{budget}</b></label><input type="range" min="100" max="800" step="25" value={budget} onChange={e=>setBudget(Number(e.target.value))}/></div><div className="control"><label>RETAILER PREFERENCE</label><div className="chips">{["ANY","FYR FIRST","EBAY","AMAZON","ALIEXPRESS"].map(x=><button className={retailer===x?"active":""} onClick={()=>setRetailer(x)} key={x}>{x}</button>)}</div></div><button className="generate" onClick={()=>setGenerated(true)}>BUILD MY LOOKS →</button><small>MVP: FYR catalogue + representative external products. Live marketplace search comes next.</small></div>
   <div className="avatarPanel"><span>02 / YOUR AVATAR</span><div className="avatar"><i/><b/></div><div className="measurements"><span>HEIGHT — ADD</span><span>CHEST — ADD</span><span>WAIST — ADD</span><span>SHOE — ADD</span></div><button>ADD MEASUREMENTS</button></div>
  </section>
  <section className={"lookResults "+(generated?"show":"")}><div className="resultsHead"><span>03 / FYR SELECTION</span><p>{generated?"Built from your current brief.":"Build your first selection above."}</p></div>{generated&&<div className="lookGrid">{looks.map(l=><article className="look" key={l.name}><div className="lookVisual"><span>{l.name}</span><div className="miniAvatar"><i/><b/></div><em>SEE ON ME / PREVIEW</em></div><div className="lookInfo"><h2>{l.name}</h2><p>{l.note}</p>{l.items.map(x=><div className="lookItem" key={x.name}><span><b>{x.name}</b><small>{x.source}</small></span><strong>£{x.price}</strong></div>)}<div className="lookTotal"><span>LOOK TOTAL</span><b>£{l.total}</b></div><div className="lookActions"><button onClick={()=>setSaved(s=>s.includes(l.name)?s:[...s,l.name])}>{saved.includes(l.name)?"SAVED ✓":"SAVE LOOK"}</button><button>REFINE →</button></div></div></article>)}</div>}</section>
  <section className="mvpFoot"><span>FYR / NEXT</span><h2>ONE PROFILE.<br/>A WORLD OF STYLE.</h2><p>The next layer connects live product feeds, persistent measurements, preference memory and a generated personal avatar. Purchases remain yours to approve.</p></section>
 </main>
}