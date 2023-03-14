import React from "react";
import { Link } from "react-router-dom";
export default function Footer({mode}) {

    return (
    <div className="footer-container">
        <footer className={`bg-${mode} footerStyle text-center text-lg-start`}>
        <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            © 2023 Copyright 
            <Link className={`text-${mode}`} to="/"> TextNexus.io</Link>
        </div>
    </footer>
    </div>
    );
}