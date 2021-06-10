import { configureStore } from "@reduxjs/toolkit";
import markdownViewerReducer from "../features/markdown-viewer/markdownViewerSlice";

export const store = configureStore({
  reducer: {
    markdownViewer: markdownViewerReducer,
  },
});
