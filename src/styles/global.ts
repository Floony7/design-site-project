import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    // Color variables
    --clr-magenta-100: #C34465;
    --clr-magenta-200: #C0345E;
    --clr-gray-100: rgb(237, 239, 241);
    --clr-gray-200: rgba(25, 41, 58, 0.1);
    --clr-gray-300: rgba(80, 100, 115, 0.5);
    --clr-gray-150: rgb(237, 239, 241); // #EDEFF1
    --clr-slate-500: rgb(89, 109, 122); // #596D7A
    --clr-slate-600: rgb(52, 70, 87); // #344657
    --clr-slate-700: rgb(80, 100, 115);
    --clr-slate-900: rgb(17, 45, 64); // #112D40
    
    // Layout variables
    --page-width: 80vw;
    --padding: 1rem;
    --margin: 1rem;

    // Base styles
    font-family: Open Sans, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
}

body {
    padding: 0;
    margin: 0;
}
`;