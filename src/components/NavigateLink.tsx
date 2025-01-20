import { ReactNode } from "react";
import { NavLink } from "react-router";
type NavLinkProps = {
  className?: string;
  children: ReactNode;
  to: string;
};

export default function NavigateLink({
  className = "",
  children,
  ...props
}: NavLinkProps) {
  return (
    <NavLink
      {...props}
      to={props.to}
      className={({ isActive }) =>
        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
        (isActive
          ? "border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-100 "
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300 ") +
        className
      }
    >
      {children}
    </NavLink>
  );
}
