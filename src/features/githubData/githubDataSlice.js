import { createSlice } from '@reduxjs/toolkit';

export const githubDataSlice = createSlice({
  name: 'githubData',
  initialState: {
    githubLink: '',
  },
  reducers: {
    setGithubLink: (state, action) => {
      state.githubLink = action.payload;
    }
  },
});

export const { setGithubLink } = githubDataSlice.actions;

export const selectGithubData = state => state.githubData;
export default githubDataSlice.reducer;
