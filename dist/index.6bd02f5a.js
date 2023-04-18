// const rootElement = document.getElementById('root')
// const header = document.createElement('h1')
// header.innerHTML = `Page Header`
// rootElement.appendChild(header)
// const root2 = document.getElementsByClassName('root2')[0]
// const dummyElement  = document.createElement('h3')
// dummyElement.innerHTML = `Page dummy element`
// root2.appendChild(dummyElement)
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
const header1 = React.createElement("h1", {
    id: "hello",
    style: {
        color: "white",
        background: "black"
    }
}, "hello from React");
const header2 = React.createElement("h2", {
    id: "hello",
    style: {
        color: "black",
        background: "yellow"
    },
    mykey: "hello2"
}, "hello from React");
const container = React.createElement("div", {}, [
    header1,
    header2
]);
rootElement.render(container);
const root2element = ReactDOM.createRoot(document.getElementsByClassName("root2")[0]);
root2element.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
