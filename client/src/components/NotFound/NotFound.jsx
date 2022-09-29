import React from "react";
import Swap from "sweetalert2"

export default function NotFound(){
    return (
        <div>
            {Swap.fire ("Not found")}
        </div>
    )
}