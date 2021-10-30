import React,{useState} from 'react';
import './Vertab.css';
import logo from'./logo.png';
import home from './home.png';
import pt from './pt.png';
import grid from './grid.png';
import ul from './ul.png';
import db from './db.png';
import gear from './gear.png';
import user from './user.png';
import { Link } from 'react-router-dom';
function Vertab() {
   const style = {
    opacity: 1,
    color: "white"
   }
   const style2 ={

   }
     const [Live, setLive] = useState(2);
      console.log(Live);
   function activetab(){
      var x = document.getElementsByClassName("tabnames");
      
   }
   const [dis,Setdis] = useState(1);
   console.log(dis)
   const disp ={
     display:""
    }
    if(dis%2==0){
      disp.display = "Block";
    }else{
      disp.display = "none";
    }
   function Clicks(z,v){
     return(
       function(){ setLive(z);
                   activetab();
                   Setdis(v)}
     )
    }
  return(
    <>
    <div id="vertab">
      <div id="Anc">
       <img alt="img here" id="appicon" src={logo}/>
      <p id="Appname">Epic Games</p>
      </div>
      <div id="otc">
        <Link to="/home">
        <div className="tabnames" id="" style={ Live === 1 ? style : style2} onClick={Clicks(1,-1)}>
        <img alt="img here" className="vericon" src={home}/>
         <p className="icn"><b>Home</b></p>
         </div>
         </Link>
         <Link to="/">
         <div className="tabnames" style={ Live === 2 ? style : style2}  id="" onClick={Clicks(2,-1)}>
        <img alt="img here" className="vericon" src={pt}/>
         <p className="icn"><b>Store</b></p>
         </div>
         </Link>
         <Link to="/Library">
         <div className="tabnames" style={ Live === 3 ? style : style2}  id="" onClick={Clicks(3,-1)}>
        <img alt="img here" className="vericon" src={grid}/>
         <p className="icn"><b>Library</b></p>
         </div>
         </Link>
         <div className="tabnames" style={ Live === 4 ? style : style2}  id="" onClick={Clicks(4,-1)}>
        <img alt="img here" className="vericon" src={ul}/>
         <p className="icn"><b>Unreal Engine</b></p>
         </div>
      </div>
      <div id="dwnt">
      <div className="tabnames"  style={ Live === 5 ? style : style2}  id="" onClick={Clicks(5,dis+1)}>
        <img alt="img here" className="vericon" src={db}/>
         <p className="icn"><b>Downlords</b></p>
         </div>
         <Link to="/Settings">
         <div className="tabnames"  style={ Live === 6 ? style : style2}  id="" onClick={Clicks(6,-1)}>
        <img alt="img here" className="vericon" src={gear}/>
         <p className="icn"><b>Settings</b></p>
         </div>
         </Link>
         <div className="tabnames"  style={ Live === 7 ? style : style2}  id="" onClick={Clicks(7,-1)}>
        <img alt="img here" className="vericon" src={user}/>
         <p className="icn"><b>Profiles</b></p>
         </div>
      </div>
    </div>
           <div id="Downloadtab" style={disp}>
           <div id="Dleft"> 
             <div id="utab">
               <button id="dbtn"></button>
               <p id="dtext">TASKS</p><br/>
             </div>
               <hr id="dhr"></hr>
               <div id="dtab2">
                 YOU HAVE NO TASK HERE
               </div>
            </div>
           <div id="dright">
           </div>
           </div>
 </>
  )
}
export default Vertab;