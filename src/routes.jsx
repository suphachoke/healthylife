import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  GiftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Activities, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        aname: "แดชบอร์ด",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        aname: "ประวัติ",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <PlusCircleIcon {...icon} />,
        name: "your activities",
        aname: "กิจกรรมที่ทำ",
        path: "/activities",
        element: <Activities />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "join events",
        aname: "เข้าร่วมการแข่งขัน",
        path: "/events",
        element: <Tables />,
      },
      {
        icon: <GiftIcon {...icon} />,
        name: "rewards",
        aname: "แลกรางวัล",
        path: "/rewards",
        element: <Notifications />,
      },
    ],
  },
];

export default routes;
