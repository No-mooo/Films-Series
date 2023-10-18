import "./SliderItem.scss";
import { item as typeListItems } from "../../store/ListItems/ListItems";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HorizonSlider } from "../HorizonSlider/HorizonSlider";
import { PrintItem } from "../PrintItem/PrintItem";
import { propsItems, sortFilterItems } from "../../helpers/sortFilterItems";

interface propsType extends propsItems{
    nameBlock: string;
}

export function SliderItem(props: propsType) {
    let listItems: typeListItems[] = useSelector((state: RootState) => state.listItems);
    listItems = sortFilterItems(props, listItems);

    return (
        <div>
            <div className="container">
                <div className="sliderName">
                    { props.nameBlock }
                </div>
                <HorizonSlider>
                    <PrintItem listItems={listItems}/>
                </HorizonSlider>
            </div>
        </div>
    )
}