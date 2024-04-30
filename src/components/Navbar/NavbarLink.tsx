import { ReactNode } from "react";

const NavbarLink = ({
  isTop,
  section,
  children,
}: {
  isTop?: boolean;
  section: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={`#${section}`}
      className={` text-white text-lg flex items-center justify-center gap-2 font-montserrat w-fit after:absolute relative after:left-0 after:bottom-0 after:w-full after:h-[2px] ${isTop ? "after:bg-red-500" : "after:bg-black"} after:scale-x-[0] after:hover:scale-x-[1] after:transition-transform duration-500 after:origin-right after:hover:origin-left cursor-pointer ease-in`}
    >
      {children}
    </a>
  );
};
export default NavbarLink;
