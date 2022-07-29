import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import DateAndHour from "./pages/DateHourMovie";
import SeatsMovie from "./pages/SeatsMovie";
import Movies from "./pages/Movies";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} /> 
                <Route path="/filme" element={<DateAndHour />} />
                <Route path="/sessao" element={<SeatsMovie />} />
                <Route path="/sucesso" element={<></>} />
            </Routes>
        </BrowserRouter>
    )
}