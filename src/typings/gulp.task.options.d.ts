import { Gulp } from "gulp";

export type GulpTaskOptions = {
  distribution: string;
  environment: string;
  source: string;
  root: string;
  gulp: Gulp;
};
