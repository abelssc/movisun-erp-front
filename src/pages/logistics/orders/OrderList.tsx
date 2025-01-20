import { useEffect } from "react";
import { useApp } from "../../../context/AppContext";

const OrderList = () => {
  const { setHeader } = useApp();

  useEffect(() => {
    setHeader("Orders");
  }, [setHeader]);

  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 -mx-6 dark:text-gray-400 border-b dark:border-gray-700">
        <tr>
          <th className="px-3 py-4"># Pedido</th>
          <th className="px-3 py-4"># Pago</th>
          <th className="px-3 py-4"># Trade</th>
          <th className="px-3 py-4">CREATED BY</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default OrderList;
