import React, { Component } from "react";
import { ListaExp } from "./ListaExp";

const Experiencia = ({ info }) => {
	return (
		<section className=" flex flex-col items-center h-screen gap-5">
			<div className="mt-8">
				<h1 className="font-karla text-black text-4xl ">
					Experiencia Profesional
				</h1>
			</div>

			{info.experienciaProfesional.map((el,i) =>{return <ListaExp key={el + i} info={el}/>})}

		</section>
	);
};

export default Experiencia;
