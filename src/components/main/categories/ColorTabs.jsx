import { getTabsData, selectData, setPage, setSelectedTabId } from 'features/main/mainSlice';
import { borderStyles, increment, tabContainer, tabList, tabStyles } from './styles/styles';
import { Box, MenuItem, MenuList } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TabContext from '@mui/lab/TabContext';
import styles from "./styles/styles.module.scss"
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { useEffect } from 'react';
import Jewelry from './Jewelry';

export const ColorTabs = () => {
    const dispatch = useDispatch()

    const { selectedTabId, tabsData, page } = useSelector(selectData)

    const handleChange = (_, newValue) => {
        dispatch(setSelectedTabId(newValue))
        dispatch(setPage(newValue));
    }

    useEffect(() => {
        dispatch(getTabsData());
    }, [dispatch]);

    return (
        <>
            <Box sx={tabContainer}>
                {tabsData.length === 0 ? (
                    <Box sx={tabContainer}>
                        <MenuItem sx={increment}>+</MenuItem>
                    </Box>
                ) : (
                    <TabContext value={page}>
                        <MenuList className={styles.tabList}>
                            <Box sx={borderStyles}>
                                <TabList
                                    sx={tabList}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    allowScrollButtonsMobile
                                    textColor='inherit'
                                    onChange={handleChange}
                                >
                                    {tabsData.map(({ id, label }) => (
                                        <Tab
                                            key={id}
                                            label={label}
                                            value={id}
                                            sx={tabStyles(id === page)}
                                        />
                                    ))}
                                </TabList>
                            </Box>
                            <MenuItem sx={increment}>+</MenuItem>
                        </MenuList>
                    </TabContext>
                )}
            </Box>
            <Jewelry selectedTabId={selectedTabId} />
        </>
    );
}