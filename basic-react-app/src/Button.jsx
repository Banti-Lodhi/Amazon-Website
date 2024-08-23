function doSomething() {
  console.log("button was clicked");
}

function paragraph() {
  console.log("HoverMouse had on the paragraph.")
}

function dbClick() {
  console.log("Click was me double time");
}

export default function Button(){
  return(
    <div>
      <button onClick={doSomething}>Click me!</button>
      <p onMouseOver={paragraph}>Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Rerum explicabo, corrupti dolorem facilis ipsa
       molestias, eveniet voluptate neque repellat obcaecati possimus mollitia,
        consequuntur sequi architecto quos voluptates libero? Atque, neque.</p>
        <button onDoubleClick={dbClick}>dbClick Me!</button>
    </div>

  );
  }