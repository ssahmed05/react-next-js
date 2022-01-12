import Link from "next/link";
import {useRouter} from "next/router";

export default function Navbar() {
    const router =  useRouter() ;
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href={'/'}>
                            <a  className={router.pathname == "/" ? "nav-link active" : "nav-link"}>Home</a>
                            {/* <a href={'/'} className="nav-link active">Home</a> */}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={'/about'}>
                            <a className={router.pathname == "/about" ? "nav-link active" : "nav-link"}>About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href={'/members'} >
                            <a className={router.pathname == "/members" ? "nav-link active" : "nav-link"}>Members</a>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
};
