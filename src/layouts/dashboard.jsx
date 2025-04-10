import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
  FooterNavbar,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className={`${sidenavType}`}>
      <div className="min-h-screen bg-blue-gray-50/50 dark:bg-[black]">
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "dark" ? "/img/team-1.jpeg" : "/img/team-1.jpeg"
          }  
          brandName="KKU Healthy Life"
        />
        <div className="p-4 xl:ml-80">
          <DashboardNavbar/>
          <Configurator />
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "dashboard" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                ))
            )}
          </Routes>
          <div className="text-blue-gray-600">
            <Footer />
          </div>
        </div>
        <FooterNavbar />
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
