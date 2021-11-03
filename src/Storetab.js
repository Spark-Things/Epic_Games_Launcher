import './Storetab.css';
import Subcontainer from './Subcontainer';
import Subcontainer2 from './Subcontainer2';
import lp from './lp.jpg';
import Rawcon from './Rawcon';
import friends from './friends.png';
import gift from './gift.png';
import jpd from './jpd.jpg';
import gg from'./gg.jpg';
import gow from './gow.jpg';
import gc from './gc.jpg';
import gh from './gh.jpg';
import gta5 from './gta5.jpg';
import hs from './hs.png';
import ed from './ed.png';
import z from './z.jpg';
import tw from './tw.png';
import { Link } from 'react-router-dom'
function Storetab() {
  return(
    <div id="Storetab">
         <div id="navbar">
             <p className="navtabs active"><b>Discover</b></p>
            <Link to="/Browse"> <p className="navtabs"><b>Browse</b></p></Link>
            <div id="righte">
               <p className="navtabs"><b>Whishlist</b></p>
               <input type="text" id="rsearchbar" placeholder="search here"/>
               <img id="rprof" src={friends} alt="frds"/>
            </div> 
          </div>
          <div className="rcontainer">
             <div id="Mimg" >
                <div id="content">
                 <p className="contentd"><b>COMING NOVEMBER 9</b></p>
                 <p className="contentd"><b>Pre-purchase the delux packet</b></p>
                 <p className="contentd"><b>Starting At $2499</b></p>
                 <button id="lbtn"><b>PRE-PURCHASE NOW</b></button>
                 </div>
             </div>
             <div id="righttab">
              <Subcontainer img={jpd} txt="Juaracis World Evolution 2"/>
              <Subcontainer img={gg} txt="Gardians of the Galaxy"/>
              <Subcontainer img={gow} txt="God of War"/>
              <Subcontainer img={gc} txt="Good Company"/>
              <Subcontainer img={gh} txt="Gravewood high"/>
              <Subcontainer img={gta5} txt="Grand theif Auto 5"/>
             </div>
          </div>
          <div className="rcontainer2">
               <div className="rcontainer3">
                   <img className="nimg" src={hs}/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="rcontainer3">
                   <img className="nimg" src={ed}/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="rcontainer3">
                   <img className="nimg" src={hs}/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
          </div>
          <div className="container2">
               <h3>Hallowin Spotlight</h3>
               <Subcontainer2 img={z} dis="World War Z Aftermath" od="saheb Interactive"/>
               <Subcontainer2 img={tw} dis="The Witcher 3" od="CD PROJECT RED"/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
          </div>
          <div className="container4">
              <div id="cocn">
              <img alt="lg" src={gift} id="glogo"/>
              <h2 id="FG">FREE GAMES</h2>
              </div>
                  <div className="container3">
                   <img className="nimg3"/>
                   <p id="d"><b>Here Is a discription</b></p>
                   <p id="od">Other discription</p>
                   <a className="readmore">Read more</a>
                  </div>
                      <div className="container3">
                      <img className="nimg3"/>
                      <p id="d"><b>Here Is a discription</b></p>
                   <p id="od">Other discription</p>
                   <a className="readmore">Read more</a>
                   </div>
         </div>
         <div className="rcontainer7">
           <table id="rtable">
              <tr>
              <td className="tabledata">
                    <h2>New Realese</h2>
                 </td>
                 <td className="tabledata">
                    <h2>Top sellers</h2>
                 </td>
                 <td className="tabledata">
                    <h2>Coming Soon</h2>
                 </td>
               </tr>  
              <tr>
                <td className="tabledata">
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                  </td>
                  <td className="tabledata">
                  <Rawcon/>
                  <Rawcon/>
                  <Rawcon/>
                  <Rawcon/>
                  <Rawcon/>
                 </td>
                 <td className="tabledata">
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                 <Rawcon/>
                 </td>
              </tr>
           </table>
        </div>
        <div className="rcontainer2">
                  <div className="container3">
                   <img className="nimg3"/>
                   <p id="d"><b>Here Is a discription</b></p>
                   <p id="od">Other discription</p>
                   <a className="readmore">$3299</a>
                  </div>
                      <div className="container3">
                      <img className="nimg3"/>
                      <p id="d"><b>Here Is a discription</b></p>
                   <p id="od">Other discription</p>
                   <a className="readmore">$751</a>
                   </div>
         </div>
         <div className="container2">
               <h3>Reactly Updated</h3>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
          </div>
          <div className="container2">
               <h3>New To The Epic Store</h3>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
          </div>
          <div className="container2">
               <h3>Reactly Updated</h3>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
          </div>
          <div id="Lastcontainer">
              <img id="lastimg" src={lp}/>
              <div id="ldis">
                 <h2>Browse</h2>
                 <p>Explore Your Catalog For next favoriet Game!</p>
                 <button id="lbtn"><b>LEARN MORE</b></button>
              </div>
          </div>
          </div>
  )
}
export default Storetab;