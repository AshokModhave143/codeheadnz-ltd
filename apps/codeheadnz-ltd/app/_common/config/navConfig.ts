import { PROFILE_PAGE_SECTION_IDS } from './ProfilePageSectionIds';

export const navConfig = {
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
      label: 'Experience',
      href: `/profile/#${PROFILE_PAGE_SECTION_IDS.experience}`,
    },
    {
      label: 'Skills',
      href: `/profile/#${PROFILE_PAGE_SECTION_IDS.techStack}`,
    },
    {
      label: 'Projects',
      href: `/profile/#${PROFILE_PAGE_SECTION_IDS.projects}`,
    },
    {
      label: 'Credentials',
      href: `/profile/#${PROFILE_PAGE_SECTION_IDS.education}`,
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
  accountDetails: {
    label: 'Account details',
    href: '/account',
  },
};
