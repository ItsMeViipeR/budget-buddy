import React from "react"; // Assurez-vous d'importer React

interface CardProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  icon?: React.ReactNode;
  name?: string;
  description?: string;
}

export const Card = ({ onClick, icon, name, description }: CardProps) => {
  return (
    <a
      className="block rounded-xl border border-blue-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      href="#"
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      <span className="inline-block rounded-lg bg-gray-700 p-3">
        {icon ? icon : <></>}
      </span>

      <h2 className="mt-2 font-bold">{name}</h2>

      <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
        {description}
      </p>
    </a>
  );
};
