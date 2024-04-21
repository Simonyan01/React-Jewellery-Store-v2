import { useState, useCallback, Fragment } from 'react';
import { Slider, Box } from '@mui/material';
import styles from "./styles.module.scss";
import { sliderStyles } from './styles';

const CustomSlider = ({ label, color }) => {
    const [value, setValue] = useState([300, 700]);
    const minDistance = 150;

    const handleChange = useCallback((_, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        } else if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 1000 - minDistance);
                setValue([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue([clamped - minDistance, clamped]);
            }
        } else setValue(newValue);
    }, [minDistance]);

    const handleChangeRange = useCallback((index, event) => {
        const newValue = [...value];
        newValue[index] = parseInt(event.target.value);
        setValue(newValue);
    }, [value]);

    return (
        <>
            <label className={styles.sliderLabel}>{label}</label>
            <Slider
                min={0}
                max={1000}
                color={color}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                step={25}
                sx={{
                    ".MuiSlider-track": sliderStyles.track,
                    ".MuiSlider-rail": sliderStyles.rail,
                    ".MuiSlider-thumb": sliderStyles.thumb
                }}
            />
            <Box className={styles.inputContainer}>
                {value.map((value, i) => (
                    <Fragment key={i}>
                        <input
                            min={0}
                            max={1000}
                            type="number"
                            value={value}
                            className={styles.inputValue}
                            onChange={(value) => handleChangeRange(i, value)}
                            placeholder={i === 0 ? 'От' : 'До'}
                        />
                        {i === 0 && <hr className={styles.separator} />}
                    </Fragment>
                ))}
            </Box>
        </>
    );
};

export default CustomSlider;
