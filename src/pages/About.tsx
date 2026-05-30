const About = () => {
  return (
    <div className="flex flex-col h-full">
      <p className=" font-light antialiased text-justify">
        I’m a GIS developer based in Switzerland.
        <br />I hold an M.Sc. in Geomatics from{" "}
        <a
          href="https://ethz.ch/en.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-900"
        >
          ETH Zürich
        </a>{" "}
        and work at the intersection of GIS, spatial data, and modern web
        development.
        <br />
        I’ve worked across both academia and industry, including roles at{" "}
        <a
          href="https://leica-geosystems.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-900"
        >
          Leica Geosystems
        </a>
        ,{" "}
        <a
          href="https://www.zhaw.ch/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-900"
        >
          ZHAW
        </a>
        , and currently at{" "}
        <a
          href="https://rawi.lu.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-900"
        >
          Raum und Wirtschaft (rawi)
        </a>
        , the spatial planning and geoinformation department of Kanton Luzern.
        <br />I build scalable, user-focused geospatial applications — combining
        cartography, spatial analysis, and full-stack development.
      </p>
    </div>
  );
};

export default About;
