export default function Price({oldPrice, newPrice}){
  let oldStyle = {textDecoration: "line-through"};
  let newStyle = {fontWeight: "bold"};
  let Styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    position: "ralative",
    bottom: "0px",
  };

   return (   
    <div style={Styles}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp; &nbsp;&nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  )
}