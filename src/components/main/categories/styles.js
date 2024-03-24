// Category

const categoryContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxHeight: "100%",
  minWidth: "100%",
  marginTop: 15,
  gap: 4,
}

const categoryItem = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px 0px #00000040",
  transition: "0.2s linear",
  flexGrow: 1,
  paddingY: 1.1,
  paddingX: 6,
  borderRadius: 1,
  "&:hover": {
    transition: "0.2s linear",
    backgroundColor: "rgb(250,250,250,0.7)",
  },
}

const genderIcon = {
  backgroundColor: "white",
  marginY: 0.6,
  paddingX: 2,
  transition: "0.2s linear",
  borderRadius: 1,
  "&:hover": {
    transition: "0.2s linear",
    backgroundColor: "rgb(250,250,250,0.7)",
  },
}

const increment = {
  fontSize: 25,
  color: "#847F7F",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px 0px #00000040",
  transition: "0.2s linear",
  paddingX: 2.4,
  borderRadius: 1,
  "&:hover": {
    transition: "0.2s linear",
    backgroundColor: "rgb(250,250,250,0.7)",
  },
}

// Color Tabs

const tabStyles = (isActive) => {
  return {
    fontFamily: "Montserrat, sans-serif",
    color: isActive ? "#4F4F4F" : "#000",
    fontWeight: isActive ? 600 : 500,
    textTransform: "capitalize",
    fontSize: 16,
  }
}

const tabContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  flexGrow: 1,
  marginTop: 2,
}

const borderStyles = {
  width: "55%",
  borderBottom: 5.5,
  borderColor: "#fff",
}

const tabList = {
  position: "relative",
  top: 6,
  ".MuiTabs-indicator": {
    backgroundColor: "#C10016",
    borderRadius: 30,
    height: 6,
  },
  ".MuiTabs-scrollButtons.Mui-disabled": {
    opacity: 0.3,
  },
}

export {
  categoryContainer,
  categoryItem,
  genderIcon,
  increment,
  tabStyles,
  tabContainer,
  borderStyles,
  tabList,
}
