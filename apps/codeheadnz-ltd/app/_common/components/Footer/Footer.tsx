'use client';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <div className="flex-none h-20 mx-4 my-4">
      <div className="flex flex-row justify-between items-center h-full">
        <div>
          <p className="text-small font-light">Codehead NZ Ltd @2024</p>
        </div>
        <div>
          <p className="text-small font-light">Privacy</p>
        </div>
      </div>
    </div>
  );
};
