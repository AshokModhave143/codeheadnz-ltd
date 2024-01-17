'use client';

import {
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
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
      className="h-24 py-2 px-2 sm:h-32 sm:px-4 sm:py-4"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href={'/'}
          >
            <div
              className="bg-cover bg-center bg-no-repeat h-12 w-12 sm:h-16 sm:w-16"
              style={{
                backgroundImage: `url('/static/images/codeheadnz-logo.png')`,
              }}
            />
            <p className="font-bold text-xl sm:text-2xl text-inherit">
              Codehead NZ Limited
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-3" justify="center">
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
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle />
        <NavbarMenu className="mt-6 sm:mt-16">
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
          <Divider />
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign up
            </Button>
          </NavbarItem>
          <Divider />
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
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent className="hidden" justify="end">
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
