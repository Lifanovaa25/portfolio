import s from "./HeadBlock.module.scss";

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
      <section>
        <div className="container bg ">
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
      </section>
    </>
  );
};
export default HeadBlock;
