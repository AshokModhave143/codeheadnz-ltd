'use client';

import { Link } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className="w-full py-12 flex item-center justify-center gap-4 bottom-0">
      <Link isExternal className="flex items-center gap-1 text-current">
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">Codehead NZ Ltd @2024</p>
      </Link>
      <div className="flex flex-row gap-1">
        <span className="text-default-600">Privacy statement</span>
        <span className="text-default-600">Terms and conditions</span>
      </div>
    </footer>
  );
};
