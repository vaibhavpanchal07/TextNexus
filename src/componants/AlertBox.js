
import React from "react";

export default function AlertBox({title}){
    return (

        title && <div className="alert alert-success" role="alert">
            {title}
        </div>

    );
}