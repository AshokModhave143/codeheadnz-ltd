import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface PageSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    PropsWithChildren {}
export const PageSection = ({ children, ...props }: PageSectionProps) => {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      {...props}
    >
      {children}
    </section>
  );
};
