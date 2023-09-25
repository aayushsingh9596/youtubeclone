// searchVideosSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_API_KEY } from "./constants";

export const fetchVideos = createAsyncThunk(
  "apiCall/fetchSearchVideos",
  async ([callType, paramFromDispatchnew]) => {
    let response;

    if (callType === "Normal") {
      console.log("calling...",paramFromDispatchnew,callType)
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&part=snippet,statistics&regionCode=IN&chart=mostPopular&maxResults=6${paramFromDispatchnew ? `&pageToken=${paramFromDispatchnew}` : ""}`
      );
    } else if (callType === "Search") {
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${paramFromDispatchnew}&type=video&part=snippet&maxResults=20`
      );
    } else if (callType === "VideoByCategory") {
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&categoryId=${paramFromDispatchnew}&key=${YOUTUBE_API_KEY}&maxResults=12`
      );
    }

    const data = await response.json();
    console.log(data);
    return data;
  }
);

const apiCallSlice = createSlice({
  name: "apiCall",
  initialState: {
    NormalVideodata: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.NormalVideodata=null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.NormalVideodata = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiCallSlice.reducer;