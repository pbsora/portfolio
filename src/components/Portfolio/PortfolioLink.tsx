import { ReactNode } from "react";

const PortfolioLink = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`text-white text-base flex items-center justify-center gap-2 font-montserrat text-nowrap w-fit after:absolute relative after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-[0] after:hover:scale-x-[1] after:transition-transform duration-500 after:origin-right after:hover:origin-left cursor-pointer ease-in`}
    >
      {children}
    </a>
  );
};
export default PortfolioLink;
