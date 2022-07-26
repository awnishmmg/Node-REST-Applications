
//Es6 using Export statement
// import React from "react";
// import ReactDOM from "react-dom";

const navBar = (
    <div id="navigation" class="navClass">
        <nav>
            <h1>My Navigation</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Faq</li>
            </ul>

            <h1>Thanos Image Below</h1>
            <img src="./thanos.jpg" width="200" height="200"/>
        </nav>

    </div>

);

//Global Keyword
ReactDOM.render(navBar,document.getElementById('root'));
//Now there is, new update feature in react@17 There, is a no need of react import statement.

// JSX also support media
// <img src="./thanos.png">