import { Category } from '@/types'
import React, { FunctionComponent } from 'react'


export const NavItem:FunctionComponent<{
  value: Category | "all";
   handlerFillterCategory:Function;
   active:string;
}> = ({
  value,
  handlerFillterCategory, 
  active
}) => {

  let className = 'capitalize cursor-pointer hover:text-asiacolor-400';
  if (active === value) className += " text-redplanet-100";

  return (
    <li className={className} onClick={()=> handlerFillterCategory(value)}>
      {value}
    </li>
  )
}

const ProjectsNavbar:FunctionComponent<{handlerFillterCategory:Function, active:string}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all'{...props}/>
      <NavItem value='React'{...props}/>
      <NavItem value='React Native'{...props}/>
      <NavItem value='Express'{...props}/>
      <NavItem value='Node'{...props}/>
      <NavItem value='Vanilla'{...props}/>
      <NavItem value='Vue'{...props}/>
    </div>
  )
}

export default ProjectsNavbar