export interface NavItem {
  id: string;
  label: string;
  href: string;
  sub?: string;
  meta?: string;
}

export const NAV_LINKS: NavItem[] = [
  {
    id: 'about',
    label: 'About',
    href: '/#about',
    sub: '5+ yrs · React & TS',
    meta: 'Stack',
  },
  {
    id: 'experience',
    label: 'Experience',
    href: '/#experience',
    sub: '3 companies',
    meta: '2019–now',
  },
  {
    id: 'writing',
    label: 'Writing',
    href: '/#writing',
    sub: '3 published posts',
    meta: 'Blog',
  },
  {
    id: 'now',
    label: 'Now',
    href: '/#now',
    sub: "What I'm working on",
    meta: 'Current',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/#contact',
    sub: 'Open to opportunities',
    meta: 'Hire me',
  },
];
