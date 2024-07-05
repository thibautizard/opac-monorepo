import "./globals.css";
import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Mail, Phone } from "lucide-react";
import FlagEn from "../public/flags/en-gb.svg";
import FlowLogo from "../public/flow_logo.avif";
import OneparkLogo from "../public/onepark_logo.svg";

/************************/
/*      HEADER          */
/************************/

const Header = (
	<header className="flex justify-between px-5 h-[109px] items-center">
		<Image
			src={FlowLogo}
			alt="logo Flow"
			width="125"
		></Image>
		<Image
			src={FlagEn}
			alt="English flag"
			width="25"
		></Image>
	</header>
);

/************************/
/*      FOOTER          */
/************************/

/* Do you have a question ? */
/* ------------------------ */
const DoYouHaveAQuestion = (
	<div className="bg-neutral-200 w-full text-center py-8">
		Une question ? Une difficulté ? <a href="/">Contactez-nous</a>
	</div>
);

/* How It Works and FAQ */
/* -------------------- */
const HowItWorksAndFAQ = (
	<div className="flex flex-col items-center">
		<a href="/">Comment ça marche ?</a>
		<a href="/">FAQ</a>
	</div>
);

/* Customer contact details */
/* ------------------------ */
const CustomerServiceMail = (
	<a
		href="mailto:customer.service@oneparkflow.com"
		className="flex items-center gap-1.5 font-medium"
	>
		<Mail size={17} />
		customer.service@oneparkflow.com
	</a>
);

const CustomerPhone = (
	<a
		href="tel:+33564091214"
		className="flex items-center gap-1.5 font-medium"
	>
		<Phone size={17} />
		+33 5 64 09 12 14
	</a>
);

const CustomerContactDetails = (
	<div className="flex gap-4">
		{CustomerServiceMail}
		{CustomerPhone}
	</div>
);

/* Other links */
/* ----------- */
const OtherLinks = (
	<ul className="flex text-sm list-with-separators">
		<li>
			<a href="/">Terms & Conditions</a>
		</li>
		<li>
			<a href="/">CGU</a>
		</li>
		<li>
			<a href="/">Site map</a>
		</li>
		<li>
			<a href="/">Confidentiality policy</a>
		</li>
		<li>
			<a href="/">Cookies</a>
		</li>
	</ul>
);

/* Copyright | App version */
/* ----------------------- */
const APP_VERSION = "2.97.0";
const CopyrightAndVersion = (
	<small className="text-flow-blue text-center">
		© Copyright {new Date().getFullYear()}. All rights reserved - v{APP_VERSION}
	</small>
);

/* Logos */
/* ----- */
const Logos = (
	<div className="flex flex-col items-center gap-2">
		<Image
			src={FlowLogo}
			alt="Logo Flow"
			width="80"
		></Image>
		<span className="flex items-center gap-2 text-xs text-flow-blue">
			Powered by{" "}
			<Image
				src={OneparkLogo}
				alt="Logo OnePark"
				width="70"
			></Image>
		</span>
	</div>
);

/* Footer */
/* ------ */
const Footer = (
	<footer className="pb-2 w-full flex flex-col items-center gap-8">
		{DoYouHaveAQuestion}
		{HowItWorksAndFAQ}
		{CustomerContactDetails}
		<div className="flex flex-col items-center">
			{OtherLinks}
			{CopyrightAndVersion}
		</div>
		{Logos}
	</footer>
);

/************************/
/*    GLOBAL LAYOUT     */
/************************/

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500"] });

const Divider = (
	<hr className="bg-gradient-to-r from-purple-500 from-1% via-indigo-500 via-10% via-cyan-500 via-55% to-blue-700 h-[6px]" />
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
		<html lang="fr">
			<body className={`${roboto.className} flex flex-col h-screen`}>
				<div>
					{Header}
					{Divider}
				</div>
				<main className="flex-grow py-5">{children}</main>
				<div>
					{Divider}
					{Footer}
				</div>
			</body>
		</html>
	);
}
