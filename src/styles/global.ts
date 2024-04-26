import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    // Color variables
    --clr-magenta-100: rgb(195, 68, 101); // #C34465
    --clr-magenta-200: rgb(192, 52, 94); // #C0345E
    --clr-gray-100: rgb(237, 239, 241);
    --clr-gray-200: rgb(237, 239, 241); // #EDEFF1
    --clr-gray-300: rgba(25, 41, 58, 0.1);
    --clr-gray-400: rgba(80, 100, 115, 0.5); // #50647380
    --clr-gray-500: rgb(226, 228, 230); // #E2E4E6
    --clr-slate-500: rgb(89, 109, 122); // #596D7A
    --clr-slate-600: rgb(52, 70, 87); // #344657
    --clr-slate-700: rgb(80, 100, 115); // #506473
    --clr-slate-800: rgb(25, 41, 58);
    --clr-slate-900: rgb(17, 45, 64); // #112D40

    // Layout variables
    --page-width: 80vw;
    --padding-section: 3rem;
    --padding: 1rem;
    --margin: 1rem;
    --width-sm: 640px;
    --width-lg: 960px;
    --width-xl: 1600px;

    // Base styles
    font-family: "Open Sans", system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    padding: 0;
    margin: 0;
}

body {
    padding: 0;
    margin: 0;
}

img {
    max-width: 100%;
}

.capitalised__header {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--clr-gray-700);
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
