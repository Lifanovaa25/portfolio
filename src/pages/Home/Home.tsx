import { useState } from "react";
import HeadBlock from "../../components/HeadBlock/HeadBlock";
import WorksGallery from "../../components/WorksGallery/WorksGallery";
import s from "./Header.module.scss";
import style from "./Home.module.scss";

const Home = () => {
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
            {/* <div
              className={
                isOpen
                  ? [s.menu, s.open].join(" ")
                  : [s.menu, s.close].join(" ")
              }
            ></div> */}
            {/* )} */}
          </div>
        </div>
      </header>
      {isOpen && (
        <div className={style.openMenu}>
          {/* <div className={style.left_animate}> */}
            <HeadBlock isOpen={isOpen} />
          {/* </div> */}
          <div className={style.right_animate}>
            <WorksGallery />
          </div>
        </div>
      )}
      {!isOpen && <HeadBlock isOpen={isOpen}/> }
    </>
  );
};

export default Home;
