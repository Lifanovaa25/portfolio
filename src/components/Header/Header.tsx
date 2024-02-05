import { useState } from "react";
import s from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.left}>
              <span>Anna</span> Lifanova
            </div>

            <div className={s.right}>
              <input
                type="checkbox"
                id="burger-checkbox"
                className={s.burger_checkbox}
              />
              <label
                className={s.burger}
                htmlFor="burger-checkbox"
                onClick={() => {
                  setOpen(!isOpen);
                }}
              >
                <div className={s.center_line}></div>
              </label>
            </div>
            {/* {isOpen && ( */}
               <div className={isOpen ?[s.menu, s.open].join(' ') :[s.menu, s.close].join(' ') }>
              <ul>
                {/* <li><a href="/worksgallery"> Портфолио</a></li>
                <li>Контакты</li>
                <li>Что-то еще</li> */}
              </ul>
            </div>
            {/* )} */}
           
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
