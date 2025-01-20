import { Link, Outlet } from "react-router";
import ApplicationLogo from "../components/ApplicationLogo";
import NavigateLink from "../components/NavigateLink";
import { useApp } from "../context/AppContext";
import { useAuth } from "../context/AuthContext";

const MainLayout = () => {
  const { header } = useApp();
  const {user,logout} = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavigateLink to="/logistics">Pedidos</NavigateLink>
                <NavigateLink to="/billing">Facturación</NavigateLink>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-gray-800 dark:text-gray-200">
                  {user?.name}
                </div>
              </div>

              <svg
                onClick={()=>logout()}
                className="size-5 text-gray-800 dark:text-gray-200 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
              {header}
            </h2>
          </div>
        </header>
      )}
      <main className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
