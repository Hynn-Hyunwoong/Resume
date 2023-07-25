export interface Title {
  plain_text: string;
}

export interface Name {
  title: Title[];
}

export interface Properties {
  Name: Name;
}

export interface Project {
  properties: Properties;
}

export interface ApiResponse {
  results: Project[];
}

export interface ProjectProps {
  projectIds: string[];
}
