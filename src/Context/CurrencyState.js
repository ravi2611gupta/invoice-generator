import { useState } from "react";
import AppContext from "./AppContext";

const CurrencyState = ({ children }) => {

    const [currency, setCurrency] = useState('USD');
    const [subtotal, setSubtotal] = useState(0)


    return(
        <AppContext.Provider value={{currency, setCurrency, subtotal, setSubtotal}}>
            {children}
        </AppContext.Provider>
    )
}

export default CurrencyState;