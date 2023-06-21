import React from "react";

export const ListaExp = ({info}) => {
	return (
		<>
			<div className="w-full h-screen flex justify-around gap-10 items-start ">
				<div className="">
					<div className=" flex gap-4 items-end">
						<h2 className="text-2xl">{`${info.rol}`}</h2>
					</div>
					<div className="flex gap-4">
						<h3 className="text-1xl">{`  ${info.lugar} (${info.lugarGeografico})`}</h3>
					</div>
					<div className="flex gap-4">
						<span className="">{`${info.fechaInicio} - ${info.fechaFin} | ${info.horario} - ${info.modalidad}`}</span>
					</div>
					<div className="w-[50rem]">
						{info.info.map((el) => {
							return (
								<>
									<p className="text-gris hover:text-black">· {el}</p>
									<br />
								</>
							);
						})}
					</div>
				</div>
				<div className="text-gris">
					<span className="text-black text-2xl">Skills</span>
					<ul className="flex flex-col items-start">
						{info.skills.map((el, i) => (
							<li className="hover:text-black" key={el + i}>
								· {el}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};
