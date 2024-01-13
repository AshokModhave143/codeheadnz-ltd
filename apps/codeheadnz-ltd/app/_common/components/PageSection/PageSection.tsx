import { PropsWithChildren } from 'react';
import './PageSection.styles.css';

export interface PageSectionProps extends PropsWithChildren {}
export const PageSection = ({ children }: PageSectionProps) => {
  return <div className="page-section">{children}</div>;
};
