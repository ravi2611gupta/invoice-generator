import { useState } from "react";
import AppContext from "./AppContext";

const CurrencyState = ({ children }) => {

    const [currency, setCurrency] = useState('USD');

    const changeCurrency = () => {
        switch(currency){
            case 'USD':
                console.log("This is US doller.");
            default:
                console.log("Please choose a valid currency.");
        }
    }

    return(
        <AppContext.Provider value={{currency}}>
            {children}
        </AppContext.Provider>
    )
}

export default CurrencyState;