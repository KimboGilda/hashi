import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "swiss-density",
    title: "Swiss Canton Density Map",
    description:
      "Interactive choropleth map visualizing population density across all 26 Swiss cantons. Built with React, Leaflet and open Swiss federal geodata.",
    tags: ["Leaflet", "React", "GeoJSON"],
    highlight: true,
    link: "https://kimbogilda.github.io/swiss-canton-density-map/",
    image: "/public/swiss-density.png",
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
    image: "greece-env.png",
    repo: "https://github.com/KimboGilda/greece-environmental-monitor",
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
    image: "athens_mob.png",
    link: "https://kimbogilda.github.io/athens-mobility-dashboard/",
    repo: "https://github.com/KimboGilda/athens-mobility-dashboard",
  },
];
