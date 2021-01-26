import Header from "./Header";
import { render } from "react-dom";

const Layout = ({children}) => {
    
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}

export default Layout;