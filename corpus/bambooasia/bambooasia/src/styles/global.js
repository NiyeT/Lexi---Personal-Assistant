import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }

  /* Added to Fix Footer to bottom of viewport */
  html, body {
    height: 100%;
  }
  .siteRoot {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .siteContent {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  footer {
    width: 100%;
  }

  /* End Fix to Place Footer on Bottom of Viewport */

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  @media screen and (min-width: 35em) {
    html {
      margin-right: calc(-100vw + 100%);
      overflow-x: hidden;
    }
  }

  ol, ul, li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: white;
    line-height: 1;
    font-size: 100%;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  h1 { font: 36px/42px "BrownProBold", sans-serif;}
  h2 { font: 24px/32px "BrownProBold", sans-serif;}
  h3 { font: 18px/30px "BrownProBold", sans-serif;}
  h4 { font: 16px/30px "BrownProBold", sans-serif;}
  h5 { font: 14px/30px "BrownProBold", sans-serif;}
  h6 { font: 13px/19px "BrownProBold", sans-serif;}

  h1,h2,h3,h5,h6 {
    font-weight: 600;
  }
  
  h1, h2, h3, h4, h5, h6 { color: #58585A; }
  
  h1 {
    font: 36px/1.2em "BrownProBold", sans-serif;
    letter-spacing: 0;
  }
  h2 {
    font: 24px/1.3em "BrownProBold", sans-serif;
    letter-spacing: 2px;
  
  }
  
  .content ul {
    margin-top:30px;
  }
    
  .content li {
    list-style: none;
    position: relative;
    margin-bottom: 10px;   
    padding-left: 20px; 
  }
  
  .content li:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top:9px;
    left:0;
    display: inline-block;
    border-radius: 6px;
    border: 1px solid #F26722;    
  }
  
  a {
    text-decoration: none;
  }
  
  a, a:hover, a:active {
    color: #F26722;      
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  a:hover, a:active {    
    outline: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  button,
  input {
    font-family: inherit;
    font-size: inherit;
    border: 1px solid #aeaeae;
    line-height: 16px;
    padding: 6px 10px 5px;
    resize: none;
    &:focus {
      outline: none;
    }
    &:invalid {
      box-shadow: none;
    }
  }

@font-face {
  font-family: "BrownProRegular";
  font-weight: normal;
  src: url("/fonts/brown/BrownPro-Regular.eot");
  src:
      url("/fonts/brown/BrownPro-Regular.woff") format("woff"),
      url("/fonts/brown/BrownPro-Regular.otf") format("opentype"),
      url("/fonts/brown/BrownPro-Regular.svg") format("svg");
}

@font-face {
  font-family: "BrownProBold";
  font-weight: bold;
  src: url("/fonts/brown/BrownPro-Bold.eot");
  src:
      url("/fonts/brown/BrownPro-Bold.woff") format("woff"),
      url("/fonts/brown/BrownPro-Bold.svg") format("svg");
}

body {
  font: 13px/25px "BrownProRegular",sans-serif;
  font-weight: 400;
  background-color: #fff;
  color: #58585a;
}

.tab-content {
  position: absolute;
}

.item-enter {
  opacity: 0;
}
.item-enter-active {
  opacity: 1;
  transition: opacity 200ms ease-in;
}
.item-exit {  
  opacity: 1;
}
.item-exit-active {
  opacity: 0;
}

/* todo: bold not displaying as bold */
strong {
  font-family: "BrownProBold", sans-serif;
  font-weight: 700;
}

/* headind tags*/ 

h3 {
  font: 18px/30px "BrownProBold",sans-serif;
}

.custom-overlay {
  background: rgba(0, 0, 0, 0.2);
}
`
export default GlobalStyle
