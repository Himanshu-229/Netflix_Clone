
import { Notifications } from "@material-ui/icons"
import { Search } from "@material-ui/icons"
import { ArrowDropDown } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.scss";


// for covert navbar solid color into blur after scroll
 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled" :"navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="/image/linkedin profile.jpeg" alt="" />
            
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="option">
              <span>Settings</span>
              <span>LogOut</span>
            </div>
            </div>
            </div>
        </div>
        </div>
  )
}
export default Navbar