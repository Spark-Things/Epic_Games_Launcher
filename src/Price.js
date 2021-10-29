import da from './da.png'
function Price() {
  return(
    <div>
      <div id="Econ">
         <p className="Fp">PRICE</p>
         <button className="Fb"><img src={da} className="Fb"/></button>
      </div>
       <p className="brtabs">Free</p>
       <p className="brtabs">Under $750.00</p>
       <p className="brtabs">Under $1500.00</p>
       <p className="brtabs">Under $2550.00</p>
       <p className="brtabs">$1099.0 and Above</p>

      <hr></hr>
    </div>
  )
}
export default Price;