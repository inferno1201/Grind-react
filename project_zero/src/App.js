import React from "react";
import ReactDOM from "react-dom/client";

const text="helllooo"

const Heading = () => <h2>how are you cutie pie</h2>;

const Title=()=>{
    return (
    <div>                                     
        <h1> {text} cutie pie</h1>             
        <Heading/>                           
        {Heading()}
    </div>)
};

//both functions arez
// const Title=()=> (   
//     <div>                                     
//         <h1> {text} cutie pie</h1>             
//         <Heading/>                             
//         {Heading()}
//     </div>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<Title/>);
// ReactDOM.createRoot(document.getElementById("root")).render({Title()});   // both return the same thing



// const heading= React.createElement("h1",{id:"head"},"hello there");  //creates an object with element info
// const heading= <h1> hey there, how are you doing </h1>;
// const root= ReactDOM.createRoot(document.getElementById('root'));    //creates a root element for rendering html
// root.render(heading); //converts the object into html element
