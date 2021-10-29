import './Maintab.css';
import Graw from './Graw';
function Maintab() {
  return(
    <div id="Maintab">
       <div id="Mleft">
          <div className="container">
               <h4>Quick Launch</h4>
               <img alt="IMG Here" className="qlimg"/>
          </div>
          <div className="container2">
              <h3>News</h3>
              <div className="container3">
                   <img className="nimg"/>
                   <label>11H AGO</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="container3">
                   <img className="nimg"/>
                   <label>11H AGO</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="container4">
                  <p><b>ACCOUNT SAFETY</b></p>
                  <p>Here i s discription</p>
                  <a>View ACCOUNT</a>
                  <img alt="img here" />
              </div>
              <Graw/>
              <Graw/>
              <Graw/>
              <Graw/>
              <div className="container4">
                  <h2>Find Friends On social Media Platforms</h2>
              </div>
              <Graw/>
              <Graw/>
              <Graw/>
              <Graw/>
          </div>
       </div>
       <div id="Mright">
           <div className="container5">
               HJIII
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