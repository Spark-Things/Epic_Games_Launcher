function Subcontainer(props) {
  return(
    <div id="Subconatiner">
      <img id="simg" alt="img" src={props.img}/>
       <p id="gname"><b>{props.txt}</b></p>
    </div>
  )
}
export default Subcontainer;