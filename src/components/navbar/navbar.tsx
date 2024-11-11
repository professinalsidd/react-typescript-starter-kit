import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { COLORS } from "../../themes/themes";

const style = {
  mr: 2,
  fontWeight: 900,
  textDecoration: "none",
  background: COLORS.RED_BLACK,
  WebkitTextFillColor: "transparent",
  WebkitBackgroundClip: "text",
};

function NavBarComp() {
  return (
    <AppBar position="static" sx={{ background: COLORS.MediumWhite }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={style}
          >
            Todo List
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarComp;
