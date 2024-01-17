'use client';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import {
  AppConfigState,
  setEnvironmentVariables,
} from '@common/redux/appConfigSlice';
import { useEffect } from 'react';

export const AppConfigProvider = ({
  env,
  children,
}: {
  env: AppConfigState['environmentVariables'];
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  const environmentVariables = useAppSelector(
    (state) => state.appConfig.environmentVariables
  );

  console.log('envionmentVariables', environmentVariables);

  useEffect(() => {
    dispatch(setEnvironmentVariables(env));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (Object.keys(environmentVariables).length === 0) {
    console.log('No environment variables found');
  }

  return <>{children}</>;
};
