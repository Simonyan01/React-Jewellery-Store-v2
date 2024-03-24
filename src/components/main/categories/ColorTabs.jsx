import { borderStyles, increment, tabContainer, tabList, tabStyles } from './styles';
import { Box, MenuItem, MenuList } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, setPage } from 'features/main/mainSlice';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';

export function ColorTabs() {
    const dispatch = useDispatch()

    const { page } = useSelector(selectData)

    const handleChange = (_, newValue) => dispatch(setPage(newValue));

    const tabsData = [
        { label: "Кольцo", value: "1" },
        { label: "Обручальные", value: "2" },
        { label: "Кольца Кастеты", value: "3" },
        { label: "Коктейльные", value: "4" },
        { label: "Помолвочные", value: "5" }
    ];

    return (
        <Box sx={tabContainer}>
            <TabContext value={page}>
                <MenuList className="w-full flex flex-grow gap-5">
                    <Box sx={borderStyles}>
                        <TabList
                            sx={tabList}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            textColor='inherit'
                            onChange={handleChange}
                        >
                            {tabsData.map(({ value, label }) => (
                                <Tab
                                    key={value}
                                    label={label}
                                    value={value}
                                    sx={tabStyles(value === page)}
                                />
                            ))}
                        </TabList>
                    </Box>
                    <MenuItem sx={increment}>+</MenuItem>
                </MenuList>
                {tabsData.map(({ value, label }) => <TabPanel key={value} value={value}>{label}</TabPanel>)}
            </TabContext>
        </Box>
    );
}