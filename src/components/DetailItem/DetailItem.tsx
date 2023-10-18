import "./DetailItem.scss";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { useSelector } from "react-redux";
import { item as typeListItems } from "../../store/ListItems/ListItems";
import { RootState } from "../../store/store";

function PrintItem({ item }: {item: typeListItems}) {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="itemInfo">
                    <img src={item.src} alt="" />
                    <div>
                        <p className="nameItem">
                            <span className="spec">Название: </span>{ item.name }
                        </p>
                        <p className="rating">
                            <span className="spec">Райтинг: </span> { item.rating }
                        </p>
                        <p className="data">
                            <span className="spec">Дата выхода: </span> { item.date }
                        </p>
                        <div className="detailedDescription">
                            <span className="spec">Описание:</span> { item.detailText }
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

function PrintError() {
    return (
        <div>Failed to get</div>
    )
}

export function DetailItem() {
    const idItem = +(useParams().id as string);
    const listItems: typeListItems[] = useSelector((state: RootState) => state.listItems);
    const itemInfo: typeListItems | undefined = listItems.find(item => item.id === idItem);
    
    return (
        <>
            { itemInfo ? <PrintItem item={itemInfo} /> : <PrintError /> }
        </>
    )
}