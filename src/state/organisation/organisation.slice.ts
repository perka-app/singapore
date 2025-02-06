import { OrganisationData } from '@/models/organisation';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loadOrganisation } from './organisation.thunks';

type OrganisationState = {
  Organisation?: OrganisationData;
  processes: {
    loading: {
      pending: boolean;
      error: string | null;
    };
  };
};

const initialState: OrganisationState = {
  Organisation: undefined,
  processes: {
    loading: {
      pending: false,
      error: null,
    },
  },
};

const organisationSlice = createSlice({
  name: 'organisation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadOrganisation.pending, (state) => {
        state.processes.loading.pending = true;
        state.processes.loading.error = null;
      })
      .addCase(
        loadOrganisation.fulfilled,
        (state, action: PayloadAction<OrganisationData>) => {
          state.Organisation = action.payload;
          state.processes.loading.pending = false;
        },
      )
      .addCase(loadOrganisation.rejected, (state, action) => {
        state.processes.loading.pending = false;
        state.processes.loading.error =
          action.error.message || 'Unexpected error';
      });
  },
});

export const organisationActions = organisationSlice.actions;

export const organisationReducer = organisationSlice.reducer;
