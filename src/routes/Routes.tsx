import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import PublicRoutes from "./PublicRoutes";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import PrivateRoutes from "./PrivateRoutes";
import MainLayout from "../layouts/MainLayout";
import OrderList from "../pages/logistics/orders/OrderList";
import OrderDetails from "../pages/logistics/orders/OrderDetails";
import InvoiceList from "../pages/billing/invoice/InvoiceList";
import InvoiceDetails from "../pages/billing/invoice/InvoiceDetails";
import PaymentsList from "../pages/billing/payments/PaymentsList";
import { AppProvider } from "../context/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoutes>
        <AppProvider>
          <MainLayout />
        </AppProvider>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/logistics"),
      },
      {
        path: "logistics",
        children: [
          {
            index: true,
            loader: () => redirect("/logistics/orders"),
          },
          { path: "orders", element: <OrderList /> },
          { path: "orders/:id", element: <OrderDetails /> },
          // { path: 'inventory', element: <InventoryList /> },
          // { path: 'shipments', element: <ShipmentTracking /> }
        ],
      },
      {
        path: "billing",
        children: [
          {
            index: true,
            loader: () => redirect("/billing/invoices"),
          },
          { path: "invoices", element: <InvoiceList /> },
          { path: "invoices/:id", element: <InvoiceDetails /> },
          { path: "payments", element: <PaymentsList /> },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: (
      <PublicRoutes>
        <AuthLayout />
      </PublicRoutes>
    ),
    children: [
      {
        index: true,
        loader: () => redirect("/auth/login"),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default function Routes(){
  return <RouterProvider router={router} />
}
