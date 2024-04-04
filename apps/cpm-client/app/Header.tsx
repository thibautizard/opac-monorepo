import React from "react";
import { Button } from "@repo/ui";
import Image from "next/image";
import FlowLogo from "../public/flow_logo.avif";
import FlagEn from "../public/flags/en-gb.svg";
export default function Header() {
	return (
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
}
