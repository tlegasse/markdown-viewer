import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "# h1\n## h2\n[link to Google](http://google.com)\n\n`test`\n```test\ncode\n<test>\n```\n* list item 1\n* list item 2\n\n > block\n > quote\n\n![GitHub Logo](http://via.placeholder.com/500x)\n\n**Bold**"
};

export const markdownViewerSlice = createSlice({
  name: 'markdownViewer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    processMarkdown: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { processMarkdown } = markdownViewerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
export const selectMarkdownContent = (state) => state.markdownViewer.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default markdownViewerSlice.reducer;
