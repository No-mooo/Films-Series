import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home";
import { StartPage } from "./pages/StartPage/StartPage";
import { DetailItem } from "./components/DetailItem/DetailItem";
import { New } from "./pages/New/New";
import { PopularFilms } from "./pages/PopularFilms/PopularFilms";
import { PopularSeries } from "./pages/PopularSeries/PopularSeries";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={ <StartPage /> }/>
            <Route path="/home" element={ <Home /> }/>
            <Route path="/new" element={ <New /> } />
            <Route path="/popularFilms" element={ <PopularFilms /> } />
            <Route path="/popularSeries" element={ <PopularSeries /> } />
            <Route path="/film/:id" element={ <DetailItem /> }/>
            <Route path="/series/:id" element={ <DetailItem /> }/>

            <Route path="*" element={ <div>Page not found</div> } />
        </Routes>
    )
}