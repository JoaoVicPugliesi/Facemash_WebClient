import { Navbar } from "../components/Navbar";
import { Navlinks } from "../components/Navlinks";
import '../css/pages/About.css';

export function About() {
    return (
        <div className="about">
            <Navbar/>
            <Navlinks/>
        </div>
    )
}