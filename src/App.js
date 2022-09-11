import {Routes, Route} from "react-router-dom";
import Home from "./Containers/Home/Home";
import Header from "./Components/Header/Header";

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
