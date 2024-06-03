import React from "react";

const SectionHeading = ({ upperHead, titleHead, mainHead }) => {
  return (
    <>
      <div className="text-center z-0 top-0">
        <div
          className=""
          style={{
            transition:
              "background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration, .4s)",
          }}
        >
          <p
            className="text-white text-7xl font-bold stroke-black mix-blend-multiply"
            style={{
              letterSpacing: "-0.5px",
              textShadow: "0px 0px 1px #585367",
            }}
          >
            {upperHead}
          </p>
        </div>
      </div>
      <div className="relative mb-7" style={{ marginBlockEnd: "20px" }}>
        <div
          style={{
            marginTop: "-4.5rem",
            transition:
              "background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration, .4s)",
          }}
        >
          <div className="text-center relative">
            <h2 className="text-darkgreen mb-2 font-semibold text-5xl tracking-tight">
              {titleHead}{" "}
              <span className="text-themeyellow hover:text-lightgreen font-bold italic">
                {mainHead}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHeading;
