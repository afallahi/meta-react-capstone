import {Routes , Route} from  "react-router-dom";
import BookingPage from "../Pages/BookingPage";
import HomePage from "../Pages/HomePage";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
    );
}

export default Main;