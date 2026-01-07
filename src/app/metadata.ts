import type { Metadata } from "next";

export const siteMetadata = {
  title: "Fullstack Web Development Guide - Visual Learning Platform",
  description: "Learn fullstack web development through visual explanations. Master frontend, backend, databases, testing, DevOps, and more with comprehensive guides and interactive examples.",
  url: "https://fullstackguide.com",
  ogImage: "/og-image.png",
};

export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return {
    title: `${title} | FullstackGuide`,
    description,
    openGraph: {
      title: `${title} | FullstackGuide`,
      description,
      url: path ? `${siteMetadata.url}${path}` : siteMetadata.url,
      siteName: "FullstackGuide",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FullstackGuide`,
      description,
    },
  };
}

