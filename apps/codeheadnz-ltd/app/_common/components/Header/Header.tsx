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
  User,
} from '@heroui/react';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useState } from 'react';
import { navConfig } from '@common/config';
import { CompanyLogo } from '../CompanyLogo';
import { FaBars } from 'react-icons/fa';
import { signOut, useSession, signIn } from 'next-auth/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const [activeTab, setActiveTab] = useState(navConfig.navLinks[0].label);

  const NavMenuLinks = () => {
    return (
      <div className="hidden sm:flex gap-2">
        {navConfig.navLinks.map((link) => (
          <NavbarItem
            key={link.label}
            isActive={activeTab === link.label}
            onClick={() => setActiveTab(link.label)}
          >
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </div>
    );
  };

  const ActionLinks = () => {
    const unAuthenticatedActions = (
      <>
        <NavbarItem>
          <Button
            color="primary"
            variant="flat"
            onPress={() => signIn('google')}
          >
            {navConfig.signIn.label}
          </Button>
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
          <User
            as={Link}
            name={session?.user?.name || ''}
            description={session?.user?.email || ''}
            avatarProps={{
              src: session?.user?.image || '',
              alt: navConfig.accountDetails.label,
              size: 'sm',
            }}
            className="font-bold border-1 border-content1-foreground rounded-md px-2 py-1 shadow-sm bg-black-200"
            href={navConfig.accountDetails.href}
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
