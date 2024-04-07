import { cardContainer, saveButton, sliderContainer, sliderSubContainer } from "./styles";
import { Box, Card, CardContent, Slide, Button } from "@mui/material"
import ToRightVector from "/src/assets/filter/to_right_vector.png";
import ToLeftVector from "/src/assets/filter/to_left_vector.png";
import FilterIcon from "/src/assets/filter/filter_icon.png";
import { InfoOutlined } from "@mui/icons-material";
import CustomSlider from "./slider/CustomSlider";
import styles from "./styles.module.scss"
import { useState } from "react";

const Filter = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => setChecked((prev) => !prev);

    const customSliders = [
        { color: "error", label: "Вес золота" },
        { color: "error", label: "Карат" },
        { color: "error", label: "Цена" },
        { color: "error", label: "Цена Производства" }
    ];

    return (
        <>
            <Box className={styles.filterContainer}>
                <Box className={styles.alignItems} checked={checked} onClick={handleChange}>
                    <img src={FilterIcon} alt="right vector" />
                    <Box className={styles.text}>Фильтр</Box>
                </Box>
                <img className={styles.ToRightVector} src={ToRightVector} alt="Vector" />
            </Box>
            <Slide
                direction="right"
                unmountOnExit
                mountOnEnter
                in={checked}
            >
                <Card sx={cardContainer}>
                    <InfoOutlined color="error" className={styles.infoIcon} />
                    <Box sx={sliderContainer}>
                        <CardContent sx={sliderSubContainer}>
                            {customSliders.map(({ label, color }) => (
                                <CustomSlider key={label} color={color} label={label} />
                            ))}
                        </CardContent>
                    </Box>
                    <img
                        className={styles.ToLeftVector}
                        onClick={handleChange}
                        src={ToLeftVector}
                        alt="left vector"
                    />
                    <Button variant='contained' sx={saveButton}>
                        Сохранить
                    </Button>
                </Card>
            </Slide>
        </>
    )
}

export default Filter