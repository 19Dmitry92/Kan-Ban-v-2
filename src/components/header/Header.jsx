import Logo from "../../assets/logo.svg";
import css from "./Header.module.css";
import arrow from "../../assets/arrow-down.svg";
import { useState } from "react";

function Header() {
   const [style, setStyle] = useState("profile1");
   const [style1, setStyle1] = useState("arrow");
   const changeStyle = () => {
      if (style === "profile1") {
         setStyle("profile2");
         setStyle1("arrow2");
      } else {
         setStyle("profile1");
         setStyle1("arrow");
      }
   };
   return (
      <header className={css.header}>
         <h1 className={css.title}>Awesome Kanban Board</h1>
         <div>
            <img className={css.logo} src={Logo} alt="" />
            <div className={css[style]} onMouseLeave={() => changeStyle()}>
               <ul className={css.list}>
                  <li href="#1" className={css.li}>
                     Profile
                  </li>
                  <li href="#2" className={css.li}>
                     Log Out
                  </li>
               </ul>
            </div>
            <img
               className={css[style1]}
               src={arrow}
               alt=""
               onClick={changeStyle}
            />
         </div>
      </header>
   );
}

export default Header;
