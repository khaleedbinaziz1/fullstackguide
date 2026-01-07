import type { Metadata } from "next";

export const siteMetadata = {
  title: "Open Stack JS - Fullstack Web Development Guide - Visual Learning Platform",
  description: "Learn fullstack web development through visual explanations. Master frontend, backend, databases, testing, DevOps, and more with comprehensive guides and interactive examples.",
  url: "https://openstackjs.com",
  ogImage: "/og-image.png",
};

export function generatePageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  return {
    title: `${title} | Open Stack JS`,
    description,
    openGraph: {
      title: `${title} | Open Stack JS`,
      description,
      url: path ? `${siteMetadata.url}${path}` : siteMetadata.url,
      siteName: "Open Stack JS",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Open Stack JS`,
      description,
    },
  };
}

