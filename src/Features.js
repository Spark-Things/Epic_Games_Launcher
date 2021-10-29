import da from './da.png'
function Features() {
  return(
    <div>
      <div id="Econ">
         <p className="Fp">Features</p>
         <button className="Fb"><img src={da} className="Fb"/></button>
      </div>
       <p className="brtabs">Single Player</p>
       <p className="brtabs">Controller Support</p>
       <p className="brtabs">Multi Player</p>
       <p className="brtabs">co-op</p>
       <p className="brtabs">Competitive</p>
       <p className="brtabs">VR</p>
      <hr></hr>
    </div>
  )
}
export default Features;