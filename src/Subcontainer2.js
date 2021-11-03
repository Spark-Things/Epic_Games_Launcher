
function Subcontainer2(props) {
  return(
    <div>
       <div className="rcontainer4">
                   <img className="nimg2" src={props.img}/>
                   <p id="d"><b>{props.dis}</b></p>
                   <p id="od">{props.od}</p>
                   <a className="readmore">Read more</a>
              </div>
    </div>
  )
}
export default Subcontainer2;