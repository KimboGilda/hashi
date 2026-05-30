export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlight: boolean;
  link?: string;
  repo: string;
  image?: string;
}
