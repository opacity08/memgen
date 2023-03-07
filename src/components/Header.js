import React from "react";

export default function Header() {

    return (
        <div className="header">
            <div className="header_logo">
                <div className="header_logo__img">
                    <img src="/images/logo.png" alt=""/>
                </div>
                <h1 className="header_logo__text">
                    Meme Generator
                </h1>
            </div>
            <div className="header_title">
                Version 1.0.1
            </div>
        </div>
    )

}