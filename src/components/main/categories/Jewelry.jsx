import { codeBox, jewelryContainer, jewelryItem, priceBox, textBox } from "./styles/styles";
import { getImages, selectData } from "features/main/mainSlice"
import { useDispatch, useSelector } from "react-redux"
import { Box, MenuList } from "@mui/material";
import { useEffect } from "react";
import Filter from "./Filter";

const Jewelry = () => {
    const dispatch = useDispatch()

    const { images } = useSelector(selectData)

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

    return (
        <Box className="flex items-start">
            <Filter />
            <Box sx={jewelryContainer}>
                {images?.map(({ id, image, price, code }) => (
                    <MenuList key={id} sx={jewelryItem}>
                        <img
                            src={image}
                            alt={image}
                            width={500}
                        />
                        <Box sx={textBox}>
                            <Box sx={codeBox}>{code}</Box>
                            <Box sx={priceBox}>{price}$</Box>
                        </Box>
                    </MenuList>
                ))}
            </Box>
        </Box>
    )
}

export default Jewelry

