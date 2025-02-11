import { Technology } from "./technology.interface";

export interface Project{
  title:string,
  imageUrl:string,
  type:string,
  description:string,
  technologies:Technology[];
};
