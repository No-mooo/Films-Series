import { Header } from "../../components/Header/Header";
import { SliderItem } from "../../components/SliderItem/SliderItem";
export function Home() {
    return (
        <>
            <Header />
            <SliderItem
                nameBlock="Новинки"
                sort="date"
                quantity={7}
                type="all"
            />

            <SliderItem
                nameBlock="Популярыне фильмы"
                sort="rating"
                quantity={7}
                type="film"
            />
            <SliderItem
                nameBlock="Популярные сериалы"
                sort="rating"
                quantity={7}
                type="series"
            />
        </>
    )
}