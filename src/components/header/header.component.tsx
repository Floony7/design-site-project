import {
  Animator,
  batch,
  Fade,
  FadeIn,
  ScrollContainer,
} from "react-scroll-motion";
import { HeaderContainer, HeaderStyles } from "./header.styles";
import logo from "../../assets/images/site-logo.png";
import { Navbar } from "../navbar/navbar.component";

export const Header = () => {
  return (
    <ScrollContainer>
      <Animator animation={batch(Fade(), FadeIn())}>
        <HeaderContainer>
          <HeaderStyles>
            <a href="/">
              <img src={logo} alt="Spaniel Design Agency logo" />
            </a>
            <Navbar />
          </HeaderStyles>
        </HeaderContainer>
      </Animator>
    </ScrollContainer>
  );
};
