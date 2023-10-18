import { Header } from "../../components/Header/Header";
import { PrintCatalogItem } from "../../components/PrintCatalogItem/PrintCatalogItem";

export function PopularFilms() {
    return (
        <>
            <Header />
            <PrintCatalogItem
                type="film"
                sort="rating"
                quantity={10}
            />
        </>
    )
}