import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface PageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    PropsWithChildren {}
export const PageSection = ({ children, ...props }: PageSectionProps) => {
  return (
    <section className="container mx-auto h-max-content w-screen" {...props}>
      {children}
    </section>
  );
};
