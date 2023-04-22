import {Routes, Route} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Details from "./Containers/DetailsView/details";
import DetailsTvShow from "./Containers/DetailsView/detailsTvShow";
import TvShow from "./Containers/TvShow/tvShow";
import MovieSearch from "./Containers/MovieSearch/movieSearch";
import LoginPage from "./Containers/Login/login";
import Register from "./Containers/Register/register";

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movies" element={<MovieSearch/>}/>
                <Route path="/movie/:id"  element={<Details/>}/>
                <Route path="/tv-show/"  element={<TvShow/>}/>
                <Route path="/tv/:id"  element={<DetailsTvShow/>}/>
                <Route path="/login"  element={<LoginPage/>}/>
                <Route path="/register"  element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
