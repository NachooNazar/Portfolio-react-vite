import React, { Component, useState,useEffect } from "react";
import Contact from "../email/Contact";

const About = ({info}) => {
	const stringColors = "text-black bg-white";

	const [showModal, setShowModal] = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	}

	
	return (
		<section
			className={`${stringColors} h-screen items-center flex-col flex justify-center gap-[13%] text-center`}>
			<div className="text-6xl font-karla">
				<h2>SOBRE MI</h2>
			</div>

			<div className="text-gris text-center font-inconsolata w-[55%] text-xl tracking-[2px]">				
					{info.sobreMi.split(" ").map((el,i)=> { return (<span className="hover:text-black" key={el+i}>{el} </span>)})}
			</div>

			<button onClick={handleClick} className="bg-rose w-[12rem] text-xl h-12 font-inconsolata rounded-full text-white p-2 hover:text-black hover:bg-rosedark duration-500">
				Contactame
			</button>
			<Contact showModal={showModal} setShowModal={handleClick}/>
		</section>
	);
};

export default About;
