//Get the DOM for the panel
let dom = echartsInstance.getDom();

//Get the child nodes
let nodeList = dom.childNodes;

//If we haven't added our controls to the DOM yet
if (nodeList.length < 2) {
  //Create a select list
  const selectList = document.createElement("select");
  selectList.id = "mySelect";
  selectList.style.borderStyle = "solid";

  //Add options
  const array = ["value1", "value2", "value3", "value4"];
  array.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.text = value;
    selectList.appendChild(option);
  });

  //Add click event handler
  selectList.addEventListener("change", () => {
    alert("Selected value: " + selectList.value);
  });

  //Create a new <div>
  const div = document.createElement("div");
  div.innerHTML += "Select ";
  div.style.marginLeft = "10px";

  //Add select to <div>
  div.appendChild(selectList);

  //Insert new <div> ahead of existing chart div
  dom.insertBefore(div, dom.firstChild);
}
