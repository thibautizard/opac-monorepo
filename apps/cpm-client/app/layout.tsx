import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
