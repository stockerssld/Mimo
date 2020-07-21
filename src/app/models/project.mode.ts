import { Chapter } from './chapter.model';

export interface Project{
  img: string,
  title: string,
  description: string
  Chapter:Chapter[]
}
