import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {NetworkFetchState, Status} from '../types/NetworkCallType';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (url: string) => {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  },
);

const initialNetworkFetchState: NetworkFetchState = {
  status: Status.IDLE,
  data: null,
  error: null,
};

/**
 * A slice of the Redux store that handles network fetch data.
 */
/**
 * A Redux slice that handles the network fetch state of the application.
 * @remarks
 * This slice handles the pending, fulfilled, and rejected states of a fetch data request.
 * It also handles the unmount state of the component.
 * @public
 */
const dataSlice = createSlice({
  name: 'networkFetch',
  initialState: initialNetworkFetchState,
  reducers: {
    /**
     * Handles the unmount state of the component.
     * @param state - The current state of the slice.
     */
    [fetchData.pending.name]: state => {
      state.status = Status.LOADING;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = Status.SUCCEEDED;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = Status.FAILED;
        state.error = action.error as Error;
      });
  },
});

export const networkFetchReducer = dataSlice.reducer;
export const networkActions = dataSlice.actions;
