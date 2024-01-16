'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      position="sticky"
      className="h-32 px-4 py-4 sm:px-2 sm:py-2 sm:h-24"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href={'/'}
          >
            <div className="bg-cover bg-center bg-[url('/static/images/codeheadnz-logo.png')] h-16 w-16" />
            <p className="font-bold text-2xl text-inherit">
              Codehead NZ Limited
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
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
