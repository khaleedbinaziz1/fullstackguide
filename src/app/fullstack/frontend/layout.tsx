import type { Metadata } from "next";
import { generatePageMetadata } from "@/app/metadata";

export const metadata: Metadata = generatePageMetadata(
  "Frontend Development",
  "Master frontend development with comprehensive guides for TypeScript, React, Next.js, Tailwind CSS, Redux, and Framer Motion. Visual explanations and code examples included.",
  "/fullstack/frontend"
);

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

