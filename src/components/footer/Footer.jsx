import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
export const Footer = () => {
	return (
		<div className="w-full h-[3rem] bg-black text-white">
			<div className="flex justify-around">
				<a title="GitHub" target="_blank" href="https://github.com/NachooNazar">
					<IoLogoGithub size={40} />
				</a>
				<a
					title="WhatsApp"
					target="_blank"
					href="https://wa.me/543434720830?text=">
					<AiOutlineWhatsApp size={40} />
				</a>
				<a
					title="LinkedIn"
					target="_blank"
					href="https://www.linkedin.com/in/ignacio-nazar/">
					<IoLogoLinkedin size={40} />
				</a>
			</div>
		</div>
	);
};
