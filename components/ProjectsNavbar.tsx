import { Category } from '@/types'
import React, { FunctionComponent } from 'react'


export const NavItem:FunctionComponent<{
  value: Category | "all"
}> = ({value}) => {
  return (
    <li className='capitalize cursor-pointer hover:text-green'>
      {value}
    </li>
  )
}

const ProjectsNavbar = () => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
      <NavItem value='all'/>
      <NavItem value='React'/>
      <NavItem value='React Native'/>
      <NavItem value='Express'/>
      <NavItem value='Node'/>
      <NavItem value='Vanilla'/>
      <NavItem value='Vue'/>
    </div>
  )
}

export default ProjectsNavbar