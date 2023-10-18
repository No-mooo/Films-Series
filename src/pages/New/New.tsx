import { Header } from "../../components/Header/Header";
import { PrintCatalogItem } from "../../components/PrintCatalogItem/PrintCatalogItem";

export function New() {
    return (
        <>
            <Header />
            <PrintCatalogItem 
                type="all"
                sort="date"
                quantity={20}
            />
        </>
    )
}