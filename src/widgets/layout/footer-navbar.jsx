import React, { useState } from "react";
import routes from "@/routes";
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  GiftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { useLocation, Link } from "react-router-dom";

export function FooterNavbar() {
  const { pathname } = useLocation();
  const [layout,page] = pathname.split("/").filter(el=>el!=="");
  console.log(layout+":"+page);
  return (
    <div className="sticky md:hidden bottom-0 flex flex-row">
        {
          routes.map((e,i)=>(
            e.layout==="dashboard" &&
            e.pages.map((ee,ii)=>(
              <Link to={`/dashboard${ee.path}`} className={`grid h-20 pt-2 cursor-pointer items-center justify-items-center border border-gray-300 dark:border-gray-800 first:rounded-tl-xl last:rounded-tr-xl ${page===ee.path.substring(1)?"bg-green-600 text-white":"dark:bg-gray-900 dark:text-white bg-gray-100 text-black"} hover:bg-[black] hover:text-white dark:hover:bg-[lightgray] dark:hover:text-black basis-1/5`}>
                {ee.icon}
                <span className="hidden sm:block mt-[-30px] font-sarabun font-bold">{ee.name}</span>
              </Link>
            ))
          ))
        }
    </div>
  );
}

FooterNavbar.displayName = "/src/widgets/layout/footer-navbar.jsx";

export default FooterNavbar;
