import { SocialLink } from "../../interface/hero";

const SocialLink = (socials: SocialLink) => {
  return (
    <>
      <img
        src={socials.icon}
        alt="social-icon"
        className="w-8 h-8 md:w-6 md:h-6 sm:w-4 sm:h-4 cursor-pointer transition-all duration-300 hover:scale-110"
      />
    </>
  );
};

export default SocialLink;
