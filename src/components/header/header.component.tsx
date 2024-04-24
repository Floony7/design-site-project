import { HeaderStyles } from "./header.styles";
import logo from "../../assets/images/site-logo.png";
export const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="Spaniel Design Agency logo" height="100" />
      <nav>Nav links</nav>
    </HeaderStyles>
  );
};
