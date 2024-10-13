import React, { Component } from "react";
import cv from "../../assets/Ignacio Nazar - Desarrollador.pdf"
const Header = ({info}) => {
	return (
		<section id="header" className="text-white h-screen bg-black text-center flex justify-center items-center font-karla">
			<article className=" gap-[1rem] justify-items-center  grid">
				<div className=" ">
					<h1 className="text-6xl">{`${info.nombre} ${info.apellido}`}</h1>
					<h3 className="text-4xl font-inconsolata text-gris p-2" >{info.rol}</h3>
				</div>
				<div className="bg-rose w-[12rem] text-xl rounded-full p-2 hover:text-black hover:bg-rosedark duration-500 ">
					<a className="" href={cv} download>Descargar CV</a>
				</div>
			</article>
		</section>
	);
};

export default Header;
