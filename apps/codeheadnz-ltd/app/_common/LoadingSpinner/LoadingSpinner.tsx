import { Spinner, SpinnerProps } from '@heroui/react';

export type LoadingSpinnerProps = SpinnerProps;
/**
 * LoadingSpinner component
 * @param {string} label - The label for the spinner.
 * @param {string} size - The size of the spinner. Default is 'md'.
 * @param {string} color - The color of the spinner. Default is 'primary'.
 * @param {object} rest - Additional props to pass to the Spinner component.
 * @returns {JSX.Element}
 */
export const LoadingSpinner = ({
  label = 'Loading...',
  size = 'md',
  color = 'primary',
  ...rest
}: LoadingSpinnerProps) => {
  return <Spinner {...{ color, size, label, ...rest }} />;
};
