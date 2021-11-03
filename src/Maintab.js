import './Maintab.css';
import friends from './friends.png'
import Graw from './Graw';
import af from './af.png';
import gear from './gear.png'
import { useState } from 'react';
import gta5 from './gta5.jpg';
import logo from './logo.png';
import hs from './hs.png';
import dd2 from './dd2.jpg';
import gg from './gg.jpg';
import tohu from './tohu.jpg';
import hero from './hero.jpg';
import gc from './gc.jpg';
import senna from './senna.jpg';
import gh from './gh.jpg';
import gow from './gow.jpg';
function Maintab() {
    const [toggle,Settoggle] = useState(1);
  return(
    <div id="Maintab">
       <div id="Mleft">
          <div className="container">
               <h4>Quick Launch</h4>
               <img alt="IMG Here" className="qlimg" src={gta5}/>
          </div>
          <div className="container2">
              <h3>News</h3>
              <div className="container3">
                   <img className="nimg" src={dd2}/>
                   <label>11H AGO</label>
                   <p><b>Darkest Dungeon 2 Early Access Interview </b></p><br/>
                   <a id="readmore">Read more</a>
              </div>
              <div className="container3">
                   <img className="nimg" src={hs}/>
                   <label>11H AGO</label>
                   <p><b>Killer Discount upto 75% Await You During The Epic Games Halloween Sale</b></p><br/>
                   <a id="readmore">Read more</a>
              </div>
              <div className="container4">
                <div className="rleft">
                  <p><b>ACCOUNT SAFETY</b></p>
                  <p>Here i s discription</p>
                  <a>View ACCOUNT</a>
                </div>  
                  <img alt="img here" className="rimg" src={logo}/>
              </div>
              <Graw time="21H AGO" img={gg} gd="Hit Play on Marvels gardian Of the Galaxy,Out Now"/>
              <Graw time="5D AGO" img={tohu} gd="Tohu Arrives On Epic Game Store"/>
              <Graw time="6D AGO" img={hero} gd="Songs of Hero: Definative Edition is now avilable on epic Games"/>
              <Graw time="6D AGO" img={gc} gd="Good Company is Now Avilable On Epic Games"/>
              <div className="container4">
              <div className="rleft">
                  <h2>Find Friends On social Media Platforms with</h2>
               </div>   
              </div>
              <Graw time="6D AGO" img={senna} gd="Relive Aytron Senna's Most iconic Challanges And Victory's in horizon chase turbo: Senna Forever,Our biggest Explanation Untill now"/>
              <Graw time="6D AGO" img={gh} gd="Gravehood High Is Launched In early acess on Epic Games"/>
              <Graw time="7D AGO" img={gow} gd="Play The Critically acclaimed God of War[2018] on PC, coming January 14,2022"/>
              <Graw time="6D AGO" img={gc} gd="Good Company is Now Avilable On Epic Games"/>
          </div>
       </div>
       <div id="Mright">
           <div className="container5">
               <div id="fcon">
                   <img src={friends} className={toggle==1 ? 'toggle factive': ' toggle'} onClick={()=>Settoggle(1)}/>
                   <img src={af} className={toggle==2 ? 'toggle factive': ' toggle'} onClick={()=>Settoggle(2)}/>
                   <img src={gear} className={toggle==3 ? 'toggle factive': ' toggle'} onClick={()=>Settoggle(3)}/>
               </div>
           </div>
           <div>
           <input type="search" id="searchbar" placeholder="Search or add Players Here"/></div>
           <div className="container6">
               <p className="shead"><b>ONLINE</b></p>
               <div className="playerprof">
                  <img id="playerdp"/>
                  <p className="playername"><b>Jeril17</b></p>
                  <label id="label"><b>YOU</b></label>
               </div>
           </div>
           <div className="container8">
           <p className="shead"><b>FRIENDS</b></p>
           <div className="playerprof">
                  <img id="playerdp"/>
                  <p className="playername"><b>Jeril17</b></p>
                  <label id="label"><b>YOU</b></label>
               </div>
               <div className="playerprof">
                  <img id="playerdp"/>
                  <p className="playername"><b>Jeril17</b></p>
                  <label id="label"><b>YOU</b></label>
               </div>
               <div className="playerprof">
                  <img id="playerdp"/>
                  <p className="playername"><b>Jeril17</b></p>
                  <label id="label"><b>YOU</b></label>
               </div>
           </div>
           <hr id="horizentalline"></hr>
            <div className="container7">
              <p id="discri"><b><a>Connect your social account </a> to connect with friends</b></p>
            </div>
       </div>
    </div>
  )
}
export default Maintab;