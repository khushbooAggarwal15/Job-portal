
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootreducer.js";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "FormData",
  storage, 

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

});

const persistor = persistStore(store);

export { store, persistor };
