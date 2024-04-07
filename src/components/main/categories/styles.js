// Category

const categoryContainer = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxHeight: "100%",
  minWidth: "100%",
  marginTop: 15,
  gap: 3.5,
}

const categoryItem = {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px 0px #00000040",
  transition: "0.2s linear",
  flexGrow: 1,
  paddingY: 1.3,
  paddingX: 5,
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
  flexWrap: "wrap",
  margin: "1rem auto",
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

// Jewelry

const jewelryContainer = {
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  marginBottom: 10,
  userSelect: "none",
  gap: 2,
}

const jewelryItem = {
  backgroundColor: "white",
  boxShadow: "0px 0px 10px 0px #00000040",
  transition: "0.2s linear",
  width: 240,
  height: "100%",
  padding: 1.5,
  borderRadius: 1.5,
  marginBottom: 1,
  cursor: "pointer",
  "&:hover": {
    transition: "0.2s linear",
    backgroundColor: "rgb(250,250,250,0.7)",
    transform: "scale(1.04)",
  },
}

const textBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 1,
  fontSize: 15,
  marginX: 0.5,
  letterSpacing: 1,
}

const codeBox = {
  fontWeight: 500,
  color: "#2E2E2E",
}

const priceBox = {
  fontWeight: 600,
  color: "#1F1617",
}

// Filter

const cardContainer = {
  minWidth: 366,
  minHeight: 620,
  position: "absolute",
  top: "12.88%",
  left: 0,
  zIndex: 50,
}

const sliderContainer = { display: "grid", placeItems: "center" }

const sliderSubContainer = { display: "grid", gap: 2.5, width: "80%" }

export {
  categoryContainer,
  categoryItem,
  genderIcon,
  increment,
  tabStyles,
  tabContainer,
  borderStyles,
  tabList,
  jewelryItem,
  jewelryContainer,
  textBox,
  codeBox,
  priceBox,
  cardContainer,
  sliderContainer,
  sliderSubContainer,
}
