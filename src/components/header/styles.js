const appBar = {
  height: "70px",
  paddingLeft: "20px",
}

const searchIcon = {
  fontSize: 22,
}

const paperStyles = {
  elevation: 0,
  sx: {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}

const personalContainer = {
  display: "grid",
  placeItems: "center",
  outline: "none",
}

const createUser = {
  lineHeight: 2,
  fontFamily: "Montserrat, sans-serif",
}

const personalText = {
  fontWeight: 700,
}

const divider = {
  bgcolor: "#B3B3B4",
  marginX: 1,
}

const logoutContainer = {
  display: "flex",
  justifyContent: "center",
  gap: 1,
  marginTop: 0.5,
}

export {
  appBar,
  searchIcon,
  paperStyles,
  personalContainer,
  createUser,
  personalText,
  divider,
  logoutContainer,
}
