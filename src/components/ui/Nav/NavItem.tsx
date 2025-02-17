import clsx from "clsx";
import { FC, ReactNode } from "react";
import { slugify, titleCase } from "src/utils";

// TODO: Replace with router link component
type MockLink = {
  to?: string;
  children: ReactNode;
};
const MockLink: FC<MockLink> = ({ children, to }) => (
  <a href={to ?? ""}>{children}</a>
);

type NavItemProps = {
  label: string;
  url?: string;
  selected?: boolean;
  unformatted?: boolean;
};
const NavItem: FC<NavItemProps> = ({ label, url, selected, unformatted }) => {
  const navItemClasses = clsx(
    "text-lg text-gray-700 tracking-wide whitespace-nowrap",
    {
      "text-orange-600 font-normal py-2 px-4 flex items-center justify-center bg-[#FFF0E6] rounded-md tracking-wider":
        selected,
    }
  );

  return (
    <li className={navItemClasses}>
      <MockLink to={url ?? `#${slugify(label)}`}>
        {unformatted ? label : titleCase(label)}
      </MockLink>
    </li>
  );
};

export default NavItem;
