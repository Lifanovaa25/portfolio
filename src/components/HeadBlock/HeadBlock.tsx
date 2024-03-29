import { FC } from "react";
import s from "./HeadBlock.module.scss";

interface Props {
 isOpen:boolean | null
}
export const HeadBlock: FC<Props> = ({isOpen}) => {
  return (
    <>
      <section className={isOpen ?[s.left_animate ,s.header_section].join(' ') :s.header_section }>
        <div className="container bg  ">
          <div className={s.wrapper}>
            <div className={s.left}>
              <h1 className={s.title}>
                <span>Front-end </span> Developer
              </h1>
            </div>
            <div className={s.stage}>
              <div className={s.cubespinner}>
                <div className={s.face1}>JavaScript</div>
                <div className={s.face2}>HTML 5</div>
                <div className={s.face3}>CSS / SASS</div>
                <div className={s.face4}>ReactJS</div>
                <div className={s.face5}>Redux</div>
                <div className={s.face6}>Git</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeadBlock;
