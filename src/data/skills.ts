export interface SkillGroup {
  category: string
  skills: { name: string; highlight: boolean }[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React',                  highlight: true  },
      { name: 'TypeScript',             highlight: true  },
      { name: 'Leaflet / React-Leaflet',highlight: true  },
      { name: 'ArcGIS Maps SDK JS',     highlight: true  },
      { name: 'JavaScript (ES6+)',      highlight: true },
      { name: 'Tailwind CSS',           highlight: true },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Ruby on Rails', highlight: true  },
      { name: 'Python',        highlight: true  },
      { name: 'REST API Design',highlight: true },
      { name: 'GeoPandas',     highlight: true },
      { name: 'Shapely',       highlight: true },
      { name: 'FastAPI',       highlight: false },
    ],
  },
  {
    category: 'Databases / Spatial',
    skills: [
      { name: 'PostgreSQL / PostGIS', highlight: true  },
      { name: 'Oracle',       highlight: true  },
      { name: 'GeoJSON / WKT',        highlight: true },
    ],
  },
  {
    category: 'Platforms / Tools',
    skills: [
      { name: 'ArcGIS Online / Pro', highlight: true  },
      { name: 'QGIS',                 highlight: true },
      { name: 'GDAL / OGR',           highlight: true },
      { name: 'Git / GitHub',        highlight: true },
      { name: 'Docker',        highlight: false },
      { name: 'Vercel',    highlight: false },
      { name: 'Linux / Bash',        highlight: true },
    ],
  },
]
