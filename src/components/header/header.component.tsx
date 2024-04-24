import { HeaderContainer, HeaderStyles } from "./header.styles";
import logo from "../../assets/images/site-logo.png";
import { Navbar } from "../navbar/navbar.component";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderStyles>
        <img src={logo} alt="Spaniel Design Agency logo" />
        <Navbar />
      </HeaderStyles>
    </HeaderContainer>
  );
};
