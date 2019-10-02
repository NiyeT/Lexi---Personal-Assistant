import React from 'react';
import { Provider} from 'mobx-react'
import RootStore from "./src/stores/index";

const rootStore = new RootStore();

// eslint-disable-next-line react/display-name,react/prop-types
export default({element})=><Provider order={rootStore.order} auth={rootStore.auth} ui={rootStore.ui} cart={rootStore.cart}>{element}</Provider>
