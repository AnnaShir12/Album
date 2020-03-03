import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default ({ children }) => (
  <>
    <Header />
    <Main />
    <main>{children}</main>
    <Footer />
    <style jsx>
      {`
        h1 {
          text-align: center;
        }
      `}
    </style>
  </>
);
