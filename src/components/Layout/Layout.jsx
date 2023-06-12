import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "../../fonts/Rubik/Rubik-Regular.ttf";

import './Layout.css';

const Layout = ({ children }) => {
    return (
      <div>
        <Header>HEADER</Header>
        <main>
          {children}
        </main>
        <Footer>
          FOOTER
        </Footer>
      </div>
    );
      
  };
  
  export default Layout;