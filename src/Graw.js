import './Graw.css';
function Graw(props) {
  return(
    <div id="rawcontainer">
        <img id="rawimg" src={props.img}/>
      <div id="gcontent">
         <label id="rawlebal"><b>{props.time}</b></label>
         <h3 id="gd">{props.gd}</h3>
         <br/><a id="readmore"><b>Read More</b></a>
      </div>
      <hr id="rawhori"></hr>
    </div>
  )
}
export default Graw;