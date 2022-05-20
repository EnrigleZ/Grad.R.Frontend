import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/main-layout";
import HomePage from "./page/home-page";


function App() {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default App;
