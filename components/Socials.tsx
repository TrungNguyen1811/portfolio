import Link from "next/link";
import { FaGithub, FaFacebook, FaDiscord, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaFacebook />,
    path: "",
  },
  {
    icon: <FaDiscord />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
];
const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
