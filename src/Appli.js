import da from './da.png'
function Appli() {
  return(
    <div>
      <div id="Econ">
          <span className="brtabs"><b>Apps</b></span>
                    <hr></hr>
         <p className="Fp">Platforms</p>
         <button className="Fb"><img src={da} className="Fb"/></button>
      </div>
       <p className="brtabs">Windows</p>
       <p className="brtabs">Mac-os</p>
      <hr></hr>
    </div>
  )
}
export default Appli;