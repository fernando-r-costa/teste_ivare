import Link from "next/link";
import Image from "next/image";
import LogoFRC from "../../../../public/frc.gif";

const Footer = () => {
  return (
    <footer className="flex justify-end items-center h-[10vh] bg-primary-color text-light-color text-[1.2em] sm:text-[1.5em] font-light">
      Coded by
      <Link
        className="w-1/12 max-w-12 min-w-8 mx-4"
        href="https://www.linkedin.com/in/fernando-r-costa/"
      >
        <Image src={LogoFRC} alt="Logo FRC" />
      </Link>
    </footer>
  );
};

export default Footer;
