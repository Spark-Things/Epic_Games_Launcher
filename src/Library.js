import './Library.css';
import Subcontainer4 from './Subconainer4';
function Library() {
  return(
    <div id="Library">
         <div className="tabnav">
                      <label id="lable"><b>Sort By :</b></label>
                      <select id="Slection">
                         <option>New Release</option>
                      </select>
                      <label id="lable"><b>Filter :</b></label>
                      <select id="Slection">
                         <option >All</option>
                         <option>Installed</option>
                      </select>
                      <div id="righte">
                         <button className="navtabs">GL</button>
                         <button className="navtabs">GL</button>
                            <input type="text" id="rsearchbar" placeholder="search here"/>
                          <img id="rprof" alt="frds"/>
                         </div>
                         <div className="container2">
                         <Subcontainer4 className="install"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         <Subcontainer4 className="notinstall"/>
                         </div>
                   </div>
                   </div>
  )
}
export default Library;