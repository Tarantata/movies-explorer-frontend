import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
   return (
      <>
         <main className="main">
            <Promo loggedIn={loggedIn} />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
         </main>
         <Footer />
      </>
   );
}

export default Main;
