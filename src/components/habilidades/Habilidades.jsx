import React from "react";
import { ListasHabilidades } from "./ListasHabilidades";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline"
export const Habilidades = ({info}) => {

	return (
		<section className=" flex flex-col items-center h-screen gap-2 justify-center " id="tecnologias">
			
			<div className=" grid w-[80vw] grid-cols-3 mb-[15rem] mt-[10rem]">
				<ListasHabilidades habilidades={info.habilidades}/>
			</div>
			<div className="flex justify-center">
			<a href="#header"> <ArrowSmallUpIcon className="h-12 w-12 text-black" /></a>
			</div>
			
		</section>
	);
};
