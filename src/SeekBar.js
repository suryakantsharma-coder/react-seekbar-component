import React, { useState } from "react";
import './style.css'

const SeekBar = (props) => {

    const [value, setValue] = useState(props.progress)

    const handleNo = (event) => {
        props.getNumber(event.target.value)
        setValue(event.target.value);
        console.log();
    };


    return (
        <div>
            <input style={{
                '--head-color': props.headColor,
                '--changeColorPosition': `${value}%`,
                '--background': props.backgroundColor,
                '--fillColor': props.fillColor,
                '--fillSecondry': (props.fillSecondaryColor == undefined) ? props.fillColor : props.fillSecondaryColor,
                '--width': props.width,
                '--headShadowColor': props.headShadow,
                '--headShadowSize': (props.headShadowSize === 0) ? '' : props.headShadowSize + "px",

            }} type="range" name="vol" value={value} min="0" max="100" onChange={handleNo} />
        </div>
    )
}

export default SeekBar;
