import s from "./HeadBlock.module.scss";

export const HeadBlock = () => {
  return (
    <>
      <div className="container bg top">
        <div className={s.wrapper}>
          <div className={s.left}>
            <h1 className={s.title}>
              <span>Front-end </span> Developer
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeadBlock;
