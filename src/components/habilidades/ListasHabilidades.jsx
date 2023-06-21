import React from 'react'
import { ListaHabilidades } from './ListaHabilidades';
export const ListasHabilidades = ({habilidades}) => {
   
  return (<>
    <ListaHabilidades habilidad={habilidades.back}/>
    <ListaHabilidades habilidad={habilidades.bd}/>
    <ListaHabilidades habilidad={habilidades.front}/>
    </>
  )
}
