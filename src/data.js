import menu1 from "./images/menu1.jpg"
import menu6 from "./images/menu6.jpg"
import menu3 from "./images/menu3.png"
import menu7 from "./images/menu7.jpg"
import menu8 from "./images/menu8.jpg"

//partner 
import partner1 from "./images/partner1.png"
import partner2 from "./images/partner2.png"
import partner3 from "./images/partner3.png"
import partner4 from "./images/partner4.png"
import partner5 from "./images/partner5.png"
import partner7 from "./images/partner7.png"
import partner6 from "./images/partner6.png"

//team
import team from "./images/team.png"
import team2 from "./images/team2.png"
import team3 from "./images/team3.png"
import team4 from "./images/team4.png"

//icon
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

export const menuContent = [
    {
      url: "/Home",
      component: <span>Home</span>,
      img:menu1
    },
    {
      url: "/services",
      component: <span>Services</span>,
      img:menu6
    },
    {
      url: "/works",
      component: <span>How works</span>,
      img:menu3
    },
    {
      url: "/teams",
      component: <span>Our Teams</span>,
      img:menu7
    },
    {
      url: "/contacts",
      component: <span>Contacts</span>,
      img:menu8
    },
  ];



  export const partner = [
    {
      img:partner1
    },
    {
      img:partner2
    },
    {
      img:partner3
    },
    {
      img:partner4
    },
    {
      img:partner5
    },
    {
      img:partner6
    },
    {
      img:partner7
    },
    {
      img:partner2
    },
  ];


  export const teams = [

    {
      img:team,
      name:"Randy Crishen",
      position:"Company CEO",
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaLinkedin/>
    },
    {
      img:team2,
      name:"Monica Ashker",
      position:"Web Designer",
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaLinkedin/>
    },
    {
      img:team3,
      name:"Tollay Ramzomi",
      position:"Web Developer",
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaLinkedin/>
    },
    {
      img:team4,
      name:"Jacke Wilson",
      position:"Marketing Specialist",
      icon1:<FaFacebookF/>,
      icon2:<FaTwitter/>,
      icon3:<FaLinkedin/>
    }
  ];