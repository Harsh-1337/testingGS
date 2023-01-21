import { useState, React } from "react";
import LoginIcon from "@mui/icons-material/Login";
import "../CSS/Header.css";
import logo from "../Images/logo2.png";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
const Header = () => {
  const { user, authenticated } = useUserContext();
  const [active, setActive] = useState(false);
  const ToggleClass = () => {
    setActive(!active);
  };
  return (
    <nav className="navbar">
      <img src={logo} alt="Company Logo" />
      <div
        className={active ? "menu-toggle is-active" : "menu-toggle"}
        onClick={ToggleClass}
        id="mobile-menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={active ? "mobile-nav" : "nav"}>
        <li className="button-57">
          <span className="Link"> Home</span>
          <span>
            <Link className="Link" to="/">
              <HomeOutlinedIcon
                sx={{ color: "blue", "&:hover": { color: "#FFF56D" } }}
              />
            </Link>
          </span>
        </li>
        <li className=" button-57">
          <span className="Link">Explore</span>
          <span>
            <Link className="Link" to="/explore">
              <FindInPageOutlinedIcon
                sx={{ color: "blue", "&:hover": { color: "#FFF56D" } }}
              />
            </Link>
          </span>
        </li>
        <li className="button-57">
          <span className="Link">About</span>
          <span>
            <Link className="Link" to="/about">
              <InfoOutlinedIcon
                sx={{ color: "blue", "&:hover": { color: "#FFF56D" } }}
              />
            </Link>
          </span>
        </li>
        {authenticated ? (
          <li className="button-57">
            <span className="Link"> {user.username}</span>
            <span>
              <Link className="Link" to={`/${user.userId}`}>
                <AccountCircleOutlinedIcon
                  sx={{ color: "blue", "&:hover": { color: "#FFF56D" } }}
                />
              </Link>
            </span>
          </li>
        ) : (
          <li className="button-57">
            <span className="Link">Login</span>
            <span>
              <Link className="Link " to="/login">
                <LoginIcon
                  sx={{ color: "blue", "&:hover": { color: "#FFF56D" } }}
                />
              </Link>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
