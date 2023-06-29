import {configureStore} from "@reduxjs/toolkit"
import { uiSlice } from "./iu/uiSlice"

export const store = configureStore({

  reducer: {
ui:uiSlice.reducer

  }


})
