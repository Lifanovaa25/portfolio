import s from "./Line.module.scss";

const Volna = () => {
  return (
    <>
      <div className={s.line}>

        
        <svg
          className={s.editorial}
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
            />
          </defs>
          <g className={s.parallax1}>
            <use href="#gentle-wave" x="50" y="3" fill="#f461c1" />
          </g>
          <g className={s.parallax2}>
            <use href="#gentle-wave" x="50" y="0" fill="#4579e2" />
          </g>
          <g className={s.parallax3}>
            <use href="#gentle-wave" x="50" y="9" fill="#3461c1" />
          </g>
          <g className={s.parallax4}>
            <use href="#gentle-wave" x="50" y="6" fill="#fff" />
          </g>
        </svg>
     
      </div>
    </>
  );
};

export default Volna;
