export interface Video {
  imgsrc: string;
  clip: string;
}

export interface SocialLink {
  icon: string;
}

export interface HeroApiProps {
  title: string;
  subtitle: string;
  img: string;
  btntext: string;
  videos: Video[];
  sociallinks: SocialLink[];
}