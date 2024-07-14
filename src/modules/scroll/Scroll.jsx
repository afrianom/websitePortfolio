import React from "react";
import './scroll.css'
import websitesArray from "./websitesArray/websitesArray";

const Scroll = ()=> {
    return (
        <div className="scroll">
            {websitesArray.map((page) => (
                <div key={page.web_no} className="scroll-items">
                    <img src={page.web_img} width='250' />
                    <p>{page.web_name}</p>
                </div>
            ))}
        </div>
    )
}

export default Scroll;