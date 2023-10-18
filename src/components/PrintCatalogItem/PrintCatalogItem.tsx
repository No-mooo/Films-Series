import "./PrintCatalogItem.scss";
import { item as typeListItems } from "../../store/ListItems/ListItems";
import { propsItems, sortFilterItems } from "../../helpers/sortFilterItems";
import { PrintItem } from "../PrintItem/PrintItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function PrintCatalogItem(props: propsItems) {
    let listItems: typeListItems[] = useSelector((state: RootState) => state.listItems);
    listItems = sortFilterItems(props, listItems);

    return (
        <div className="container">
            <div className="printWrap">
                <PrintItem listItems={listItems}/>
            </div>
        </div>
    )
}