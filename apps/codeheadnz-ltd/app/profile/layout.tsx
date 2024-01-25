import React, { ReactNode } from 'react';

export default function ProfilePageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // <div className="h-screen w-screen bg-background overflow-hidden">
    //   <div className="grid grid-cols-12 gap-2 size-full overflow-hidden">
    //     <div className="col-span-2 sticky size-full overflow-x-hidden overflow-y-auto">
    //       <SideDrawer />
    //     </div>
    //     <div className="col-span-10 w-auto overflow-y-auto">{children}</div>
    //   </div>
    // </div>
    <div className="h-screen w-screen bg-background overflow-auto">
      {children}
    </div>
  );
}
