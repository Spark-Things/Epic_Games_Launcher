import './Settingtab.css';
function Settingtab() {
  return(
    <div id="Settingtab">
      <div id="smenu">
        <button id="sbtn">aerrow</button>
        <p id="sheading"><b>SETTINGS</b></p>
      </div><br/>
      <hr className="shr"></hr>
    <div id="sdmenu">  
      <div className="smenu2">
       <h4 id="sheading">LANGUAGE</h4><br/>
        <div id="select">
          <a><b>English</b></a>
        </div>
      </div>
      <hr  className="shr"></hr>
      <div className="smenu2">
        <h4 id="sheading">PREFRANCE</h4><br/>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Enable Offline Mode Browsing</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Minimize The System Tray</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Run When My Computer Start</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Enable Debug Login</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Hide Game Library</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Allows Installs While Game Is Running</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Enable Cloud Saves</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">Throttle Downloads</label>
         </div>
         <div className="chckcontainer">
           <input type="checkbox" className="checkbox"/><label className="clable">USB proxy</label>
         </div>
      </div>
    </div>
    </div>
  )
}
export default Settingtab;