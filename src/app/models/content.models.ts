/**
 * Shared content models for the portfolio site.
 * Content is kept fully typed so the data files stay easy to update.
 */

export interface ContactInfo {
  address: string[];
  email: string;
  phone?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  affiliations: string[];
  photo: string;
  contact: ContactInfo;
  social: SocialLink[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface ResearchArea {
  title: string;
  description?: string;
}

export interface Award {
  year: string;
  description: string;
}

/** Home page content bundle. */
export interface HomeContent {
  about: string[];
  education: EducationItem[];
  researchAreas: ResearchArea[];
  awards: Award[];
  openings: string[];
}

export type MemberStatus = 'current' | 'former';

export interface Member {
  name: string;
  role: string;
  status: MemberStatus;
  startDate?: string;
  photo?: string;
  bio?: string;
  email?: string;
  website?: string;
}

export type PublicationType = 'journal' | 'conference' | 'preprint';

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: number;
  type: PublicationType;
  links?: SocialLink[];
}

export interface Project {
  title: string;
  summary: string;
  thumbnail?: string;
  tags: string[];
  funding?: string;
}

export interface Course {
  code: string;
  title: string;
  term?: string;
  role?: string;
  description?: string;
}
