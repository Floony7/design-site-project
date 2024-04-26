import { useViewportWidth } from "../../utils/use-viewport-width";
import { DesktopNav } from "./desktop.nav.component";
import { MobileNav } from "./mobile.nav.component";

export const Navbar = () => {
  const width = useViewportWidth();
  console.log("WIDTH", width);
  return <>{width < 760 ? <MobileNav /> : <DesktopNav />}</>;
};
