

// //Real Dom using Pure Js
// const h1 = document.createElement("h1");
// h1.textContent = "Hy My First Page";
// console.log(h1);
// document.getElementById("root").append(h1);

// Global Dom Object @ VER 17
// const rootElement = document.getElementById("root");
// ReactDOM.render(<h1>This My App from React</h1>,rootElement);
// Ver 17 ---> real Dom => react Dom

// @ Ver 18
// real Dom ---> virtaul Dom ----> React Root
// createRoot.render(<h1>This My App from React</h1>,document.getElementById("root"));

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render("<h1>This is My Code<h1/>");


const rootElement = document.getElementById("root");

// You have two use One Parent for multiple sibling or childrens.
const Tag = ( 
    <div>
        <h1>This My App from React From Variable</h1>
        <p>This a Paragraph </p>
    </div>
);

// rootElement.append(JSON.stringify(Tag));
// console.log(Tag);
ReactDOM.render(Tag,rootElement);


