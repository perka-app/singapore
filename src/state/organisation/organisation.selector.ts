import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectOrganisationSlice = (state: RootState) => state.organisation;

export const organisationSelector = createSelector(
  selectOrganisationSlice,
  (userState) => userState.Organisation,
);

export const loadingProcessSelector = createSelector(
  selectOrganisationSlice,
  (userState) => userState.processes.loading.pending,
);
