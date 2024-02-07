import { HeroApiProps } from "../interface/hero";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";

const Hero = (heroapi: HeroApiProps) => {
  const hero = heroapi.heroapi;
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute left-0 right-0 top-0 opacity-100 z-10"></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {hero.title}
            </h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">
              {hero.subtitle}
            </h1>
            <button
              type="button"
              className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5"
            >
              {hero.btntext}
            </button>
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {hero.videos?.map((video, index) => {
                return (
                  <Clips key={index} imgsrc={video.imgsrc} clip={video.clip} />
                );
              })}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3 ">
              {hero.sociallinks?.map((social, index) => {
                return (
                  <SocialLink key={index} icon={social.icon} />
                );
              })}
            </div>
          </div>
          <div>
            <img
              src={hero.img}
              alt="hero-img"
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xs:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
