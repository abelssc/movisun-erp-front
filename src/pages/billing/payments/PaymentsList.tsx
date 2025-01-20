import { useEffect } from 'react'
import { useApp } from '../../../context/AppContext';


const PaymentsList = () => {
   const { setHeader } = useApp();
  
    useEffect(() => {
      setHeader("Pagos");
    }, [setHeader]);
  return (
    <div>PaymentsList</div>
  )
}

export default PaymentsList