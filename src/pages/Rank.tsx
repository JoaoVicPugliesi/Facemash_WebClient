import { Navbar } from "../components/Navbar";
import { Navlinks } from "../components/Navlinks";
import '../css/pages/Rank.css';

export function Rank() {
    return (
        <div className="rank">
            <Navbar/>
            <Navlinks/>
        </div>
    )
}