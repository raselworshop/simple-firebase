import { Outlet } from "react-router-dom";
import Header from "../Components/Fixed_Component/Header";

const Layouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layouts;