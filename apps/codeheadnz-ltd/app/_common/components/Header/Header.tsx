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
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { ThemeSwitcher } from '../ThemeSwitcher';
import './Header.style.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const navConfig = {
    companyName: 'Codehead NZ Limited',
    logoUrl: '/static/images/codeheadnz-logo.png',
    baseUrl: '/',
    navLinks: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: '/about',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
    socialLinks: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/codeheadnz',
        icon: 'twitter',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/ashokmodhave143',
        icon: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/codeheadnz/',
        icon: 'linkedin',
      },
    ],
    signIn: {
      label: 'Login',
    },
    signUp: {
      label: 'Sign Up',
    },
    signOut: {
      label: 'Sign Out',
    },
  };

  const NavLinks = () => {
    return navConfig.navLinks.map((link) => (
      <NavbarItem key={link.label} isActive>
        <Link color="foreground" href={link.href}>
          {link.label}
        </Link>
      </NavbarItem>
    ));
  };

  const ActionLinks = () => {
    return (
      <>
        <NavbarItem>
          <Link href="#">{navConfig.signIn.label}</Link>
        </NavbarItem>
        <Divider className="hidden" />
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            {navConfig.signUp.label}
          </Button>
        </NavbarItem>
      </>
    );
  };

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
            href={navConfig.baseUrl}
          >
            <div
              className="bg-cover bg-center bg-no-repeat h-12 w-12 sm:h-16 sm:w-16"
              style={{
                backgroundImage: `url(${navConfig.logoUrl})`,
              }}
            />
            <p className="font-bold text-xl sm:text-2xl text-inherit">
              {navConfig.companyName}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavLinks />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <ActionLinks />
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle />

        <NavbarMenu className="mt-6 sm:mt-16">
          <NavbarMenuItem>
            <ActionLinks />
          </NavbarMenuItem>
          <Divider />
          <NavLinks />
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="hidden" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <ActionLinks />
      </NavbarContent>
    </Navbar>
  );
};
