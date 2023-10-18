import { Link, useLocation } from "react-router-dom";
import "./NavList.scss";

export function NavList() {
    interface typeListNav {
        name: string;
        route: string;
    }

    const listNav: typeListNav[] = [
        {
            name: "Главное",
            route: "/home",
        },
        {
            name: "Новинки",
            route: "/new"
        },
        {
            name: "Популярные фильмы",
            route: "/popularFilms"
        },
        {
            name: "Популярные сериалы",
            route: '/popularSeries'
        },
    ];

    const path = useLocation();

    return (
        <ul className="listNavWrap">
            {
                listNav.map((item) => 
                    <li key={item.route}>
                        <Link
                            to={item.route}
                            className={ path.pathname === item.route ? 'activeNav' : undefined }
                        >
                            { item.name }
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}