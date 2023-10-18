import { Link } from "react-router-dom";
import "./StartPage.scss";

export function StartPage() {
    return(
        <div className="homeBg">
            <Link to="/home">
                <h1 className="pulse">
                    HOME
                </h1>
            </Link>
        </div>
    )
}