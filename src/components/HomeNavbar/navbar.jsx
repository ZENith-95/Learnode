import "./navbar.css"
import img1 from "../../../public/logo.png"
import img2 from "../../../public/icon.png"
import img3 from "../../../public/profile.png"
import { Link } from "react-router-dom";


function navbar () {
    return (
        <div className="navbar" id="nav">
            <div className="logo">
                <img src={img1} alt="" />
            </div>
            <div className="navbar-middle">
                <ul>
                    <Link to="/">Home</Link>
                    <a href="#feature">Feature</a>
                    <a href="#footer"></a>
                </ul>
            </div>

            <div className="navbar-right">
                <div className="navbar-icon">
                    <Link to="/notification">
                    <img src={img2} alt="" />
                        
                    </Link>
                    <div className="dot">0</div>
                </div>

                <img src={img3} alt="" />
                
            </div>

        </div>
    )
}


export default navbar;