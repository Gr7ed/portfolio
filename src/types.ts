export type Project = {
  id: string;
  title: string;
  type: string;
  images: string[];
  tags: string[];
  description: string;
  url?: string;
  githubUrl?: string;
  createdAt: string;
  updatedAt: string;
};
