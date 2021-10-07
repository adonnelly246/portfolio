import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Projects from "./Projects"
import Contact from "./Contact"


export default function Navigation(){

    return(

        <div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/Projects">My Projects</Link>
            <Link to="/Contact">Contact</Link>
            </nav>

            <Switch>
             <Route exact path="/" ><Home /></Route>
             <Route path="/projects"> <Projects /></Route>
             <Route path="/Contact"> <Contact /></Route>

            </Switch>
            
            
        </div>
    )
}