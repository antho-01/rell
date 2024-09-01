
import Image from "next/image";
import "./navigation.css"

const Navigation = () => {
      return(
            <div className="Navigation">
                  <div className="NavigationLogoContainer">
                        <Image 
                         src="/logo-nbg.png"
                         alt="logo"
                         loading="lazy"
                         layout="fill"
                         />
                  </div>

                  <ul className="NavigationList">
                        <li className="NavigationListItems">Home</li>
                        <li className="NavigationListItems">About</li>
                        <li className="NavigationListItems">Contact</li>
                        <li className="NavigationListItems">Engagement</li>
                  </ul>


            </div>
      )
}

export default Navigation;