const About = () => {
  return (
    <div className="max-w-2xl space-y-5 text-gray-700 text-[15px] leading-7">
      <p>
        I’m a GIS developer based in Switzerland working at the intersection of
        spatial data, cartography, and modern web applications.
      </p>

      <p>
        I hold an M.Sc. in Geomatics from{" "}
        <a
          href="https://ethz.ch/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline decoration-gray-300 hover:decoration-green-500 transition"
        >
          ETH Zürich
        </a>{" "}
        and have worked across academia and industry, including{" "}
        <a
          href="https://leica-geosystems.com/"
          className="text-gray-900 underline decoration-gray-300 hover:decoration-green-500 transition"
        >
          Leica Geosystems
        </a>{" "}
        and{" "}
        <a
          href="https://www.zhaw.ch/en/"
          className="text-gray-900 underline decoration-gray-300 hover:decoration-green-500 transition"
        >
          ZHAW
        </a>
        .
      </p>

      <p>
        I build scalable geospatial applications combining GIS analysis, mapping
        systems, and full-stack engineering.
      </p>
    </div>
  );
};

export default About;
