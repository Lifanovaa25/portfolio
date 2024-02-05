import s from "./HeadBlock.module.scss";
import arrow from "./../../assets/images/arrow-double-start-svgrepo-com.svg";
import { useState } from "react";

export const HeadBlock = () => {
  const [height, setHeight] = useState(true);
  // const Items = [
  //   {
  //     skill: "JavaScript",
  //   },
  //   {
  //     skill: "HTML 5",
  //   },
  //   {
  //     skill: "CSS / SASS",
  //   },
  //   {
  //     skill: "ReactJS",
  //   },
  //   {
  //     skill: "Redux",
  //   },
  //   {
  //     skill: "AntDesing",
  //   },
  //   {
  //     skill: "Git",
  //   },
  // ];
  return (
    <>
      <section className={height ?[s.header_section, s.max_height].join(' ') : s.min_height}>
        <div className="container bg  ">
          <div className={s.wrapper}>
            <div className={s.left}>
              <h1 className={s.title}>
                <span>Front-end </span> Developer
              </h1>

              {/* <div className={s.skills}>
                {Items.map((item) => (
                  <span className={s.word}>
                    <span className={s.letter}>{item.skill}</span>
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
        {height && (
          <div className={s.bottom_btn}>
            <div
              className={[s.btn_arrow, s.puls].join(" ")}
              onClick={() => {
                setHeight(!height);
              }}
            >
              <div className={s.bounce}>
                <img src={arrow} className={s.arrow} alt="" />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default HeadBlock;
