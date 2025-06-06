import React from 'react';
import {social} from '../data';

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index)=> {
        return <li className='flex justify-center items-center text-accent' key={index}>
          <a className='text-base hover:rotate-360 hover:transition-all hover:duration-500' href={item.href} target="_blank" rel="noopener noreferrer">
            {item.icon }
          </a>
        </li>
      })}
      </ul>
  )
}

export default Socials