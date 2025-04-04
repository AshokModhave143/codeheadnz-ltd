'use client';

import { Link } from '@heroui/react';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <div className="w-full py-12 flex item-center justify-center gap-4 bottom-0">
      <Link isExternal className="flex items-center gap-1 text-current">
        <span className="text-default-600">Powered by</span>
        <p className="text-primary text-center">
          &copy; 2025 Codehead NZ Limited
        </p>
      </Link>
      <div className="flex flex-row gap-1">
        <span className="text-default-600">Privacy statement</span>
        <span className="text-default-600">Terms and conditions</span>
      </div>
    </div>
  );
};
