import s from "./HeadBlock.module.scss";

export const HeadBlock = () => {
  return (
    <>
      <section>
        <div className="container bg ">
          <div className={s.wrapper}>
            <div className={s.left}>
              <h1 className={s.title}>
                <span>Front-end </span> Developer
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeadBlock;
