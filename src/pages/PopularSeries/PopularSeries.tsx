import { Header } from "../../components/Header/Header";
import { PrintCatalogItem } from "../../components/PrintCatalogItem/PrintCatalogItem";

export function PopularSeries() {
    return (
        <>
            <Header />
            <PrintCatalogItem
                type="series"
                sort="rating"
                quantity={10}
            />
        </>
    )
}