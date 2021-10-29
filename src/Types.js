import da from './da.png'
function Types() {
  return(
    <div>
      <div id="Econ">
         <p className="Fp">TYPES</p>
         <button className="Fb"><img src={da} className="Fb"/></button>
      </div>
       <p className="brtabs">Game</p>
       <p className="brtabs">Game Bundle</p>
       <p className="brtabs">Editer</p>
       <p className="brtabs">Game Add-on</p>
       <p className="brtabs">Game Demo</p>
       <p className="brtabs">Apps</p>
      <hr></hr>
    </div>
  )
}
export default Types;