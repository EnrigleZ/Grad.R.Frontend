import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/main-layout";


function App() {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default App;
