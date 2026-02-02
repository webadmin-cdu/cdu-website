// Navigation Types

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
  icon?: string;
  description?: string;
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}

export interface MegaMenuColumn {
  title: string;
  items: NavItem[];
}

export interface MegaMenuConfig {
  columns: MegaMenuColumn[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface QuickAccessConfig {
  prospectiveStudents: QuickLink[];
  currentStudents: QuickLink[];
  parents: QuickLink[];
  alumni?: QuickLink[];
  faculty?: QuickLink[];
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface FooterConfig {
  columns: FooterColumn[];
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
  legalLinks: NavItem[];
}

export interface SiteNavigation {
  main: NavItem[];
  footer: FooterConfig;
  quickAccess: QuickAccessConfig;
}
