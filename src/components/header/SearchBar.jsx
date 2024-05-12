import SearchIcon from '@mui/icons-material/Search';
import styles from "./header.module.scss"
import { searchIcon } from './styles';
import { Box } from "@mui/material"

const SearchBar = () => {
    return (
        <Box className={styles.searchBar}>
            <input type="search" placeholder="Поиск" />
            <Box className={styles.searchIconContainer}>
                <SearchIcon style={searchIcon} className={styles.searchIcon} />
            </Box>
        </Box>
    )
}

export default SearchBar