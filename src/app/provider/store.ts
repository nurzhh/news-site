import newsSlice from "@/shared/model/news/newsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    news: newsSlice
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
