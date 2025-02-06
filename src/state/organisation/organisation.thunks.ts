import { createAsyncThunk } from '@reduxjs/toolkit';

const API = process.env.REACT_APP_API_URL;

export const loadOrganisation = createAsyncThunk(
  'organisation/loadOrganisation',
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}/organisations/info/${name}`);

      if (response.status >= 400 && response.status < 500) {
        return rejectWithValue('Organisation not found');
      }
      if (response.status >= 500) {
        return rejectWithValue('Services are not available');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue('Unexpected error');
    }
  },
);
