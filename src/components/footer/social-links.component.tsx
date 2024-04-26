import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SocialsSection } from "./footer.styles";

export const SocialLinks = () => {
  return (
    <SocialsSection>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedin />
    </SocialsSection>
  );
};
