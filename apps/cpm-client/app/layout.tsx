import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Divider = (
	<div>
		<hr className="bg-gradient-to-r from-purple-500 from-1% via-indigo-500 via-10% via-cyan-500 via-55% to-blue-700 h-[8px]" />
		<div className="h-4 bg-background" />
	</div>
);

export const metadata: Metadata = {
	title: "Onepark Flow",
	description:
		"Onepark Flow is a parking management system that helps you manage your parking spaces and parking lots.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{Divider}
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
