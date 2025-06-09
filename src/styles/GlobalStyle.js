import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: #121212; // Very dark grey, near black
    color: #E0E0E0; // Light grey text for good contrast
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6; // Default line height
  }

  h1, h2, h3, h4, h5, h6 {
    color: #F5F5F5; // Brighter white/light grey for headings
    font-weight: 700; // Assuming Inter bold for headings
    margin-top: 0; // Reset default margins if needed
  }

  // Keep purple as an accent for now, can be changed
  // For example, primary action elements or specific highlights
  // For links, let's try a slightly desaturated purple or a neutral accent
  a {
    color: #A095E5; // A slightly desaturated, lighter purple for links
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #BEB6F0; // Brighter on hover
    }
  }

  * {
    box-sizing: border-box;
  }

  // Custom scrollbar (optional, but common in software UI feel)
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1f1f1f;
  }
  ::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyle;
