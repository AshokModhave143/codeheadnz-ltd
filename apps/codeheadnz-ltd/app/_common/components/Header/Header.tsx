'use client';

import {
  Link,
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Avatar,
} from '@heroui/react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useState } from 'react';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { CompanyLogo } from '../CompanyLogo';
import { FaBars } from 'react-icons/fa';
import { signOut, useSession } from 'next-auth/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const navConfig = {
    navLinks: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'About',
        href: `/profile/#${PROFILE_PAGE_SECTION_IDS.about}`,
      },
      {
        label: 'Profile',
        href: '/profile',
      },
      {
        label: 'Projects',
        href: `/profile/#${PROFILE_PAGE_SECTION_IDS.projects}`,
      },
      {
        label: 'Contact',
        href: `/profile/#${PROFILE_PAGE_SECTION_IDS.contact}`,
      },
    ],
    socialLinks: [
      {
        label: 'Google',
        href: 'https://www.google.com/search?q=codehead+nz+limited',
        icon: 'google',
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
      href: '/authenticate',
    },
    signUp: {
      label: 'Sign Up',
    },
    signOut: {
      label: 'Sign Out',
    },
  };

  const [activeTab, setActiveTab] = useState(navConfig.navLinks[0].label);

  const NavMenuLinks = () => {
    return navConfig.navLinks.map((link) => (
      <NavbarItem
        key={link.label}
        isActive={activeTab === link.label}
        onClick={() => setActiveTab(link.label)}
      >
        <Link color="foreground" href={link.href}>
          {link.label}
        </Link>
      </NavbarItem>
    ));
  };

  const ActionLinks = () => {
    const unAuthenticatedActions = (
      <>
        <NavbarItem>
          <Link color="primary" href={navConfig.signIn.href || '#'}>
            {navConfig.signIn.label}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            {navConfig.signUp.label}
          </Button>
        </NavbarItem>
      </>
    );

    const authenticatedActions = (
      <>
        <NavbarItem className="inline-flex gap-2">
          <p className="ml-2 font-semibold bottom-0">
            {session?.user?.name || 'User'}
          </p>
          <Avatar
            alt={session?.user?.name || ''}
            src={session?.user?.image || ''}
            size="sm"
            isBordered
            color="success"
          />
        </NavbarItem>
        <NavbarItem>
          <Button color="danger" variant="solid" onPress={() => signOut()}>
            {navConfig.signOut.label}
          </Button>
        </NavbarItem>
      </>
    );
    return status === 'authenticated'
      ? authenticatedActions
      : unAuthenticatedActions;
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      position="sticky"
      isMenuOpen={isMenuOpen}
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="flex p-2 justify-between"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
          content=""
          icon={<FaBars className="size-8 bg-black-100" />}
        />
        <NavbarBrand className="gap-2">
          <CompanyLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavMenuLinks />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <ActionLinks />
      </NavbarContent>

      <NavbarMenu className="sm:hidden bg-black fixed py-2 px-4">
        {navConfig.navLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? 'primary'
                  : index === navConfig.navLinks.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />
        <NavbarMenuItem className="gap-2">
          <ActionLinks />
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem>
          <ThemeSwitcher />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
