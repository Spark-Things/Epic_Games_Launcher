import './Vertab.css';
import logo from'./logo.png';
import home from './home.png';
import pt from './pt.png';
import grid from './grid.png';
import ul from './ul.png';
import db from './db.png';
import gear from './gear.png';
import user from './user.png';
function Vertab() {
  return(
    <div id="vertab">
      <div id="Anc">
       <img alt="img here" id="appicon" src={logo}/>
      <p id="Appname">Epic Games</p>
      </div>
      <div id="otc">
        <div className="tabnames">
        <img alt="img here" className="vericon" src={home}/>
         <p className="icn"><b>Home</b></p>
         </div>
         <div className="tabnames">
        <img alt="img here" className="vericon" src={pt}/>
         <p className="icn"><b>Store</b></p>
         </div>
         <div className="tabnames">
        <img alt="img here" className="vericon" src={grid}/>
         <p className="icn"><b>Library</b></p>
         </div>
         <div className="tabnames">
        <img alt="img here" className="vericon" src={ul}/>
         <p className="icn"><b>Unreal Engine</b></p>
         </div>
      </div>
      <div id="dwnt">
      <div className="tabnames">
        <img alt="img here" className="vericon" src={db}/>
         <p className="icn"><b>Downlords</b></p>
         </div>
         <div className="tabnames">
        <img alt="img here" className="vericon" src={gear}/>
         <p className="icn"><b>Settings</b></p>
         </div>
         <div className="tabnames">
        <img alt="img here" className="vericon" src={user}/>
         <p className="icn"><b>Profiles</b></p>
         </div>
      </div>
    </div>
  )
}
export default Vertab;