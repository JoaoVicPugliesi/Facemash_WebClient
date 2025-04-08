import '../css/Navlinks.css'
import { Link } from './Link'

export function Navlinks() {
    return (
        <div className="navlinks">
           <Link url='/' name='Home'/>
           <Link url='/about' name='About'/>
           <Link url='/rank' name='Rank'/>
           <Link url='/contacts' name='Contacts'/>
        </div>
    )
}