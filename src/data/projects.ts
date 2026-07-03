import type { Project } from "../types";
import athensMob from "../assets/athens_mob.png";
import movieSearch from "../assets/movie-search.png";
import swissDensity from "../assets/swiss-density.png";
import greeceEnv from "../assets/greece-env.png";
import athensGuide from "../assets/athens_guide.png";

export const projects: Project[] = [
  {
    id: "swiss-density",
    title: "Swiss Canton Density Map",
    description:
      "Interactive choropleth map visualizing population density across all 26 Swiss cantons. Built with React, Leaflet and open Swiss federal geodata.",
    tags: ["Leaflet", "React", "GeoJSON"],
    highlight: true,
    link: "https://kimbogilda.github.io/swiss-canton-density-map/",
    image: swissDensity,
    repo: "https://github.com/kimbogilda/swiss-canton-density-map",
  },
  {
    id: "greece-env",
    title: "Greece Environmental Monitor",
    description:
      "Live dual-layer environmental dashboard for Greece. Tracks real-time seismic activity from the USGS earthquake feed and current weather conditions across 15 cities via Open-Meteo API.",
    tags: ["Leaflet", "React", "REST API"],
    highlight: false,
    link: "https://kimbogilda.github.io/greece-environmental-monitor/",
    image: greeceEnv,
    repo: "https://github.com/KimboGilda/greece-environmental-monitor",
  },
  {
    id: "exploring-athens",
    title: "Exploring Athens",
    description: `A lightweight web app built with HTML, CSS, and JavaScript to help users discover the best spots to eat, drink, grab a coffee, or sightsee in Athens.`,
    tags: ["HTML", "Javascript", "TailwindCSS"],
    highlight: true,
    image: athensGuide,
    link: "https://kimbogilda.github.io/exploring_athens/",
    repo: "https://github.com/KimboGilda/exploring_athens",
  },
  {
    id: "athens-mobility-dashboard",
    title: "Athens Urban Mobility Dashboard",
    description: `Interactive transit map of Athens built with React,
      Leaflet and real OpenStreetMap data. Visualizes all 3 metro lines
      with stations, and thousands of bus stops across the city fetched
      live from the Overpass API.`,
    tags: ["Leaflet", "MarkerCluster", "OSM"],
    highlight: false,
    image: athensMob,
    link: "https://kimbogilda.github.io/athens-mobility-dashboard/",
    repo: "https://github.com/KimboGilda/athens-mobility-dashboard",
  },
  {
    id: "movie-search",
    title: "Movie Search App",
    description: `A responsive movie discovery app built with React and TypeScript,
    powered by the TMDB API. Users can browse popular movies,
    search by title, and save favorites that persist across sessions.`,
    tags: ["React", "TypeScript", "Mobx"],
    highlight: true,
    image: movieSearch,
    link: "https://kimbogilda.github.io/movies_kimbogilda/",
    repo: "https://github.com/KimboGilda/movies_kimbogilda",
  },
];
