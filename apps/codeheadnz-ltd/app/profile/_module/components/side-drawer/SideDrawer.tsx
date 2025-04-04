'use client';
import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import { useState } from 'react';

export const SideDrawer = () => {
  const [selectedKeys, setSelectedKeys] = useState('introduction');
  return (
    <div className="flex flex-col h-full px-2">
      <Listbox
        color="primary"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(value) => setSelectedKeys(value.toString())}
      >
        <ListboxSection showDivider>
          <ListboxItem key="profile" className="p-0 gap-0">
            <p className="text-2xl font-light text-wrap">Ashok Modhave</p>
            <p className="text-small font-thin text-nowrap">
              Full Stack Engineer
            </p>
          </ListboxItem>
        </ListboxSection>
        <ListboxSection showDivider>
          <ListboxItem key="introduction">Introduction</ListboxItem>
          <ListboxItem key="about">About</ListboxItem>
          <ListboxItem key="projects">Projects</ListboxItem>
          <ListboxItem key="contact">Contact</ListboxItem>
        </ListboxSection>
      </Listbox>
    </div>
  );
};
