import { Articles } from "@/shared/lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allNews = createAsyncThunk(
  "news/allNews",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-04-22&sortBy=publishedAt&apiKey=fc62c44428db43f0a43ec3c505585046"
      );
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export type News = {
  status: string;
  totalResults: number;
  articles: Articles[];
};

interface CourseState {
  news: News[] | null;
  loading: boolean;
  error: null | any;
}

const initialState: CourseState = {
  news: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.error = null;
      })
      .addCase(allNews.rejected, (state, action) => {
        state.loading = false;
        state.news = null;
        state.error = action.payload;
      });
  },
});
