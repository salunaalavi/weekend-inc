import Footer from "./Footer";
import Header from "./Header";

const Index = ({ children, ...props }) => (
    <>
        <Header {...props} />
        <main>{children}</main>
        <Footer />
    </>
);
export default Index;