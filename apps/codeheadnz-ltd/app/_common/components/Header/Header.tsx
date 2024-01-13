'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../ThemeSwitcher';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="flex-none h-20 mx-4 my-4"
    >
      <NavbarBrand>
        <div className="bg-cover bg-center bg-[url('/assets/images/codeheadnz-logo.png')] h-16 w-16" />
        <p className="font-bold text-2xl text-inherit text-foreground ml-2">
          Codehead NZ Limited
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
