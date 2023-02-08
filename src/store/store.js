import { configureStore } from '@reduxjs/toolkit'

import shopcar from './reducers/shopcar';
//定义store仓库  自动配置了redux devtools
 const store = configureStore({
   reducer: {
    counter:shopcar
  },
})

export default store