import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import DateAndHour from "./pages/DateHourMovie";
import SeatsMovie from "./pages/SeatsMovie";
import Movies from "./pages/Movies";
import SuccessPage from './pages/SuccessPage';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} /> 
                <Route path="/sessoes/:idFilme" element={<DateAndHour />} />
                <Route path="/assentos/:idSessao" element={<SeatsMovie />} />
                <Route path="/sucesso" element={<SuccessPage />} />
            </Routes>
        </BrowserRouter>
    )
}