import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AppConfigState {
  environmentVariables: {
    ENVIORNMENT: 'dev' | 'test' | 'prod';
  };
}

const initialState = { environmentVariables: {} } as unknown as AppConfigState;

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    setEnvironmentVariables: (
      state,
      action: PayloadAction<AppConfigState['environmentVariables']>
    ) => {
      state.environmentVariables = action.payload;
    },
  },
});

export const { setEnvironmentVariables } = appConfigSlice.actions;
export default appConfigSlice;
