myCallback = (text) => {
  alert(text);
};

const myTextCallbackHelper = "alert('Step 1'); myCallback('Step2');";
const onclick = new Function(myTextCallbackHelper);

let myToolbox = {
  toolbox: {
    show: true,
    itemSize: 30,
    feature: {
      my1: {
        title: "chart",
        icon: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
        onclick,
      },
    },
  },
};

return myToolbox;
