import "./Header.scss";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import { SearchFields } from "../SearchFields/SearchFields";
import { NavList } from "../NavList/NavList";

export function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-wrap">
                    <Link to="/home">
                        <img src={ logo } alt="" />
                    </Link>
                    <div className="header-menu">
                        <SearchFields />
                        <nav>
                            <NavList />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}