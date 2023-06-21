import React from "react";

export const ListaHabilidades = ({ habilidad }) => {
	return (
		<article className=" flex flex-col items-center gap-3">
			<h3 className="text-2xl font-karla ">{habilidad.nombre}</h3>
			<ul className="grid gap-2 text-center  ">
				{habilidad.skills.map((el, i) => (
					<li
						className="font-inconsolata text-gris hover:text-black "
						key={el + i}>
						{el}
					</li>
				))}
			</ul>
		</article>
	);
};
