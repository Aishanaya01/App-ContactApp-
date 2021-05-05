import React, {CreateContext} from 'react';
import { createContext } from 'react';
export default ()=> null;
const GlobalContext = createContext{{}};
const GlobalProvider= {{children}} => {
 return <GlobalContext.Provider>{{children}}</GlobalContext.Provider>
};

