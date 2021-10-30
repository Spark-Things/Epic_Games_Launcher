import './Storetab.css';
import Subcontainer from './Subcontainer';
import Subcontainer2 from './Subcontainer2';
import lp from './lp.jpg';
import Rawcon from './Rawcon';
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
               <img id="rprof" alt="frds"/>
            </div> 
          </div>
          <div className="rcontainer">
             <div id="Mimg" >
                <div id="content">
                 <button id="lbtn"><b>PRE-PURCHASE NOW</b></button>
                 <p className="contentd"><b>Starting At $2499</b></p>
                 <p className="contentd"><b>Pre-purchase the delux packet</b></p>
                 <p className="contentd"><b>COMING NOVEMBER 9</b></p>
                 </div>
             </div>
             <div id="righttab">
              <Subcontainer/>
              <Subcontainer/>
              <Subcontainer/>
              <Subcontainer/>
              <Subcontainer/>
              <Subcontainer/>
             </div>
          </div>
          <div className="rcontainer2">
               <div className="rcontainer3">
                   <img className="nimg"/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="rcontainer3">
                   <img className="nimg"/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
              <div className="rcontainer3">
                   <img className="nimg"/>
                   <label>Hollowwin Sale 2021</label>
                   <p><b>Here Is a discription</b></p><br/>
                   <a>Read more</a>
              </div>
          </div>
          <div className="container2">
               <h3>Hallowin Spotlight</h3>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
               <Subcontainer2/>
          </div>
          <div className="container4">
              <div>
              <img />
              <h2>FREE GAMES</h2>
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