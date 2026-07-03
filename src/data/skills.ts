export type SkillLevel = "core" | "advanced" | "familiar";

export interface SkillGroup {
  category: string;
  skills: { name: string; level: SkillLevel }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "Leaflet / React-Leaflet", level: "core" },
      { name: "ArcGIS Maps SDK JS", level: "core" },
      { name: "JavaScript (ES6+)", level: "core" },
      { name: "Tailwind CSS", level: "core" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Ruby on Rails", level: "core" },
      { name: "Python", level: "core" },
      { name: "REST API Design", level: "advanced" },
      { name: "GeoPandas", level: "advanced" },
      { name: "Shapely", level: "advanced" },
      { name: "FastAPI", level: "familiar" },
    ],
  },
  {
    category: "Databases / Spatial",
    skills: [
      { name: "PostgreSQL / PostGIS", level: "core" },
      { name: "Oracle", level: "core" },
      { name: "GeoJSON / WKT", level: "advanced" },
    ],
  },
  {
    category: "Platforms / Tools",
    skills: [
      { name: "ArcGIS Online / Pro", level: "core" },
      { name: "QGIS", level: "core" },
      { name: "GDAL / OGR", level: "core" },
      { name: "Git / GitHub", level: "core" },
      { name: "Docker", level: "familiar" },
      { name: "Vercel", level: "familiar" },
      { name: "Linux / Bash", level: "advanced" },
    ],
  },
];
