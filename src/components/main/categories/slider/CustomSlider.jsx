import { Slider } from '@mui/material'
import { useState } from 'react'

const CustomSlider = ({ label, color }) => {
    const [value, setValue] = useState([300, 700]);
    const minDistance = 150;

    const handleChange = (_, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 1000 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };

    return (
        <>
            <label>{label}</label>
            <Slider
                value={value}
                min={0}
                max={1000}
                color={color}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
            {/* <label htmlFor="">To</label>
            <label htmlFor="">From</label> */}
        </>
    )
}

export default CustomSlider