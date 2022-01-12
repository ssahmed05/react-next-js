import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <div className="container h-100">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};
