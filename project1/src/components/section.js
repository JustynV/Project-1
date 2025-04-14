import React from "react";

function Section({text,subtext}) {
  return (
    <section
      className="py-28"
      style={{
        background:
          "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl space-y-3 md:mx-auto">
          <p className="text-white-800 text-3xl font-semibold sm:text-4xl">
            {text}
          </p>
          <h3 className="text-indigo-600 font-semibold">
            {subtext}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section;