import { useEffect } from "react";
import { useApp } from "../../../context/AppContext";


const InvoiceList = () => {
   const { setHeader } = useApp();
    
      useEffect(() => {
        setHeader("Pedidos");
      }, [setHeader]);
  return (
    <div>InvoiceList</div>
  )
}

export default InvoiceList