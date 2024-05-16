const myFunction = () => {
  alert("myFunction() called!");
};

//Get the DOM for the panel
let dom = context.panel.chart.getDom();

//Get the child nodes
let nodeList = dom.childNodes;

//If we haven't added our controls to the DOM yet
if (nodeList.length < 2) {
  //Create a new button
  const btn = document.createElement("button");

  //Establish button name
  const textnode = document.createTextNode("My Button");
  btn.appendChild(textnode);

  //Add click event handler
  btn.addEventListener("click", myFunction);

  //Create a new <div>
  const div = document.createElement("div");

  //Add button to <div>
  div.appendChild(btn);

  //Insert new <div> ahead of existing chart div
  dom.insertBefore(div, dom.firstChild);
}
