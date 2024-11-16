// const heading = React.createElement("h1", { id: "heading" }, "Hello world");
// const divElement = React.createElement("div",{},[heading,heading,heading]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(divElement);




const heading = React.createElement("h1",{id:"heading"},"heelo world");

const divElement1 = React.createElement("div",{id:'child1'},[heading,heading]);

const divElement2 = React.createElement("div",{id:'child2'},[heading,heading]);


const parentDivElement = React.createElement("div",{id:"parent"},[divElement1,divElement2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDivElement);