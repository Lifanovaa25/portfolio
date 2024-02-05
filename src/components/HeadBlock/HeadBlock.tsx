import s from "./HeadBlock.module.scss";
// import arrow from "./../../assets/images/arrow-double-start-svgrepo-com.svg";

export const HeadBlock = () => {
  
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
      <section className={s.header_section}>
        {/* <div className={height ? s.max_height : s.min_height}> */}
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
          {/* </div> */}
          {/* {height && (
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
          )} */}
        </div>
      </section>
    </>
  );
};
export default HeadBlock;
