import { categoryContainer, categoryItem, genderIcon, increment } from './styles';
import { getCategory, selectData, setActiveIcon } from 'features/main/mainSlice';
import { Box, MenuItem, MenuList } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

const Category = () => {
    const dispatch = useDispatch();

    const { activeIcon, category } = useSelector(selectData);

    const genderIconData = [
        {
            id: "woman",
            name: "Woman icon",
        },
        {
            id: "man",
            name: "Man icon",
        }
    ];

    const getIconSrc = (id) => {
        return activeIcon === id ? (
            `/src/assets/category/active_${id}_icon.png`
        ) : (
            `/src/assets/category/${id}_icon.png`
        )
    };

    const handleClickIcon = (id) => dispatch(setActiveIcon(id));

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <MenuList sx={categoryContainer}>
            <Box className="grid">
                {genderIconData.map(({ id, name }) => (
                    <MenuItem
                        key={id}
                        sx={genderIcon}
                        onClick={() => handleClickIcon(id)}
                    >
                        <img src={getIconSrc(id)} alt={name} />
                    </MenuItem>
                ))}
            </Box>
            {category.map(({ id, name, image }) => (
                <MenuItem
                    key={id}
                    sx={categoryItem}
                >
                    <Box className="grid place-items-center">
                        <img src={image} alt={name} />
                        <Box className="text-[#2E2E2E]">{name}</Box>
                    </Box>
                </MenuItem>
            ))}
            <MenuItem sx={increment}>+</MenuItem>
        </MenuList>
    );
};

export default Category;
