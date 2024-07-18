import React from "react";
import ReactDom from "react-dom";

const name ="Anubargavi";
const currentDate = new Date();
const year = currentDate.getFullYear();

const img="https://picsum.photos/200";
// {/* inline styling for react */}
const customstyle= {
    color : "brown",
    fontSize:"20px",
};
// to-update without touch any line of code
customstyle.color ="gold";
ReactDom.render(
    <div>
    <p className="heading" contentEditable="true" spellCheck="false">Created by Anubargavi.</p>
    <p>Copyright CURRENTYEAR</p>
    <p  style={customstyle}>Created by {name}</p>
    <p>Copyright {year}</p>
    <div>
    <img src={img + "?grayscale"} alt="random"  />
    </div>
    <div>
        <img  className="flowers-img" src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg" alt="" srcset="" />
        <img     className="flowers-img" src="https://img.freepik.com/premium-photo/beautiful-flowers-wallpaper_1022026-44449.jpg?size=626&ext=jpg&ga=GA1.1.2062042256.1721280872&semt=sph" alt="" srcset="" />
        <img     className="flowers-img" src="https://img.freepik.com/free-photo/beautiful-bouquet-roses_23-2151617972.jpg?size=626&ext=jpg&ga=GA1.1.2062042256.1721280872&semt=sph" alt="" srcset="" /> 
        
    </div>
      
    </div>,
    document.getElementById("root")
)














// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
