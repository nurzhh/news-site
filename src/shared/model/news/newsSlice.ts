import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { News } from "@/shared/lib/types";

export const fetchAllNews = createAsyncThunk(
  "news/fetchAllNews",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2024-04-25&sortBy=publishedAt&apiKey=fc62c44428db43f0a43ec3c505585046"
      );
      return res.data as News;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

interface NewsState {
  news: News | null;
  loading: boolean;
  error: null | string;
}

const initialState: NewsState = {
  news: null,
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.error = null;
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        state.loading = false;
        state.news = null;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
