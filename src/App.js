import Header from "./components/header/Header";
import DateAndHour from "./pages/DateHourMovie";
import SeatsMovie from "./pages/SeatsMovie";
import Movies from "./pages/Movies";

export default function App() {
    return (
        <>
            <Header />
            
           {/*  <Movies /> */}
            {/* <DateAndHour /> */}
            <SeatsMovie />
        </>
    )
}