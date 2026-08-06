export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  language: string;
  siteUrl: string;
  siteRepo: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  socialLinks: SocialLink[];
}

export const siteMetadata: SiteMetadata = {
  title: 'bas. — Senior Frontend Engineer & Design Systems Architect',
  author: 'Ilyas Bashirah (bas.)',
  headerTitle: 'bas.',
  description:
    'Senior Frontend Engineer & Design Systems Architect portfolio. Showcasing engineering excellence, React/Next.js architecture, and technical writings.',
  language: 'en-US',
  siteUrl: 'https://bas.co',
  siteRepo: 'https://github.com/milyasbpa/personal-website',
  email: 'bashirahilyas@gmail.com',
  github: 'https://github.com/milyasbpa',
  linkedin: 'https://www.linkedin.com/in/ilyas-arya-181a7a184/',
  twitter: 'https://twitter.com/ilyasbashirah',
  socialLinks: [
    {
      name: 'GitHub',
      href: 'https://github.com/milyasbpa',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ilyas-arya-181a7a184/',
      ariaLabel: 'Visit LinkedIn profile',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/ilyasbashirah',
      ariaLabel: 'Visit Twitter profile',
    },
  ],
};
