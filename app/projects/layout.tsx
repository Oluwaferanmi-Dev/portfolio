import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects • Oluwaferanmi Oyelowo",
  description: "A collection of all my projects",
  openGraph: {
    title: "Oluwaferanmi caleb Oyelowo",
    description: "Sit back and explore all my projects for free",
    images:
      "https://i.pinimg.com/564x/81/05/33/810533f3738b9189e7519f8064ff5dd7.jpg",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
