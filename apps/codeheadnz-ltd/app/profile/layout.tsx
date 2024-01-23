import React, { ReactNode } from 'react';
import { SideDrawer } from './_module/components/side-drawer';

export default function ProfilePageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="h-screen w-screen bg-background overflow-hidden">
      <div className="grid grid-cols-12 gap-2 size-full overflow-hidden">
        <div className="col-span-1 sticky size-full overflow-x-hidden overflow-y-auto">
          <SideDrawer />
        </div>
        <div className="col-span-11 w-auto  overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
