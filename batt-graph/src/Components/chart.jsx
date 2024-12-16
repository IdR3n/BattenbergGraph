import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
function Chart() {
    return(
        <button>wtf button</button>
    );
}

export default Chart;