export type Project = {
  title: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  github: string;
  link: string;
  shortDesc: string;
  longDesc: string;
  skills: string[];
};

export type Skill = {
  title: string;
  logo: string;
  // url: string;
  // description: string;
};

export type ContactFormTypes = {
  name: string;
  email: string;
  message: string;
};
