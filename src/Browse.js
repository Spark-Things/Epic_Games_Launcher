import './Browse.css'
import Subcontainer2 from './Subcontainer2';
import Filter from './Filter';
import Price from './Price';
import Subcontainer3 from './Subcontainer3';
import Discounted from './Discounted';
import Features from './Features';
import Types from './Types';
import Appli from './Appli';
import da from './da.png'
function Browse() {
  return(
    <div id="Browsetab">
        <div id="navbar">
             <p className="navtabs"><b>Discover</b></p>
             <p className="navtabs active"><b>Browse</b></p>
            <div id="righte">
               <p className="navtabs"><b>Whishlist</b></p>
               <input type="text" id="rsearchbar" placeholder="search here"/>
               <img id="rprof" alt="frds"/>
            </div> 
          </div>
          <div className="rcontainer">
                <div className="container2">
                  <div id="brleft">
                 <div className="tabnav">
                      <label id="lable"><b>Sort By</b></label>
                      <select id="Slection">
                         <option>New Release</option>
                      </select>
                      <button id="Btn"><b>Add To WishList</b></button>
                 </div>
                  <h3>Hallowin Spotlight</h3>
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />

                     <Subcontainer3 />

                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                     <Subcontainer3 />
                  </div> 
                 <div id="brighttab">
                    <span className="brtabs"><b>Filters</b></span>
                    <hr></hr>
                    <Filter/>
                    <Price/>
                    <Discounted/>
                    <Features/>
                    <Types/>
                    <Appli />
                </div>
                 </div>
         </div>
    </div>
  )
}
export default Browse;