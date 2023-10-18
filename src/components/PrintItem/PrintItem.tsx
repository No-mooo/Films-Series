import "./PrintItem.scss";
import { item as typeListItems } from "../../store/ListItems/ListItems";
import { Link } from "react-router-dom";

export function PrintItem({ listItems }: {listItems: typeListItems[]}) {
    return (
        <>
            {
                listItems.map(item => 
                    <Link
                        key={item.id}
                        to={`/${item.type}/${item.id}`}
                    >
                        <img src={item.src} alt="" className="sliderItem" />
                        <p className="nameFilm">{ item.name }</p>
                    </Link>
                )
            }
        </>
    )
}