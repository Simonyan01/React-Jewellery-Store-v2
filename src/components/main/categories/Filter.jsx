import { cardContainer, saveButton, sliderContainer, sliderSubContainer } from "./styles/styles";
import { Box, Card, CardContent, Button, Backdrop } from "@mui/material"
import ToRightVector from "/src/assets/filter/to_right_vector.png";
import ToLeftVector from "/src/assets/filter/to_left_vector.png";
import { selectData, setChecked } from "features/main/mainSlice";
import FilterIcon from "/src/assets/filter/filter_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { InfoOutlined } from "@mui/icons-material";
import CustomSlider from "./slider/CustomSlider";
import styles from "./styles/styles.module.scss"

const Filter = () => {
    const dispatch = useDispatch()

    const { checked } = useSelector(selectData)

    const handleChange = () => dispatch(setChecked(!checked));


    const customSliders = [
        { color: "error", label: "Вес золота" },
        { color: "error", label: "Карат" },
        { color: "error", label: "Цена" },
        { color: "error", label: "Цена Производства" }
    ];

    return (
        <>
            <Box checked={checked} onClick={handleChange} className={styles.filterContainer}>
                <Box className={styles.alignItems}>
                    <img src={FilterIcon} alt="right vector" />
                    <Box className={styles.text}>Фильтр</Box>
                </Box>
                <img className={styles.ToRightVector} src={ToRightVector} alt="Vector" />
            </Box>
            <Backdrop open={checked} sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}>
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
                    <Button variant='contained' sx={saveButton}>Сохранить</Button>
                </Card>
            </Backdrop>
        </>
    )
}

export default Filter