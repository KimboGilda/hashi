const About = () => {
  return (
    <div className="max-w-2xl space-y-5 text-gray-700 text-[15px] leading-7">
      <p>
        I am a GIS developer based in Switzerland working at the intersection of
        spatial data, cartography, and modern web applications.
      </p>

      <p>
        I hold an M.Sc. in Geomatics from{" "}
        <a
          href="https://ethz.ch/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline hover:decoration-green-700 transition"
        >
          ETH Zürich
        </a>{" "}
        and have worked across academia and industry, including{" "}
        <a
          href="https://leica-geosystems.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline hover:decoration-green-700 transition"
        >
          Leica Geosystems
        </a>{" "}
        and{" "}
        <a
          href="https://www.zhaw.ch/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline hover:decoration-green-700 transition"
        >
          ZHAW
        </a>
        . Currently I am employed as GIS Software Developer at{" "}
        <a
          href="https://rawi.lu.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline hover:decoration-green-700 transition"
        >
          Raum und Wirtschaft (rawi)
        </a>
        , the spatial planning and geoinformation department of Kanton Luzern.
      </p>

      <p>
        I build scalable, user-focused geospatial applications — combining
        cartography, spatial analysis, and full-stack development.
      </p>
    </div>
  );
};

export default About;
