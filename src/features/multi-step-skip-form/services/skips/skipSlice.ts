// src/features/skipSelection/skipSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Skip } from './skipModules';
import { fetchAvailableSkips } from './skipApi';

export interface SkipState {
  skips: Skip[];
  selectedSkip: Skip | null;
  loading: boolean;
  error: string | null;
}

const initialState: SkipState = {
  skips: [],
  selectedSkip: null,
  loading: false,
  error: null,
};

export const getSkips = createAsyncThunk('skipSelection/getSkips', async () => {
  const data = await fetchAvailableSkips();
  return data; 
});

const skipSlice = createSlice({
  name: 'skipSelection',
  initialState,
  reducers: {
    selectSkip(state, action: PayloadAction<Skip>) {
      state.selectedSkip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSkips.fulfilled, (state, action: PayloadAction<Skip[]>) => {
        state.loading = false;
        state.skips = action.payload;
      })
      .addCase(getSkips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching skip data';
      });
  },
});

export const { selectSkip } = skipSlice.actions;
export default skipSlice.reducer;
