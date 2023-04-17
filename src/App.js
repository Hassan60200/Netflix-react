import {Routes, Route} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";
import Details from "./Containers/DetailsView/details";

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/movie/:id"  element={<Details/>}/>
            </Routes>
        </div>
    );
}

export default App;
