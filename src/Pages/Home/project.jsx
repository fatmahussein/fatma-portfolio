import React from 'react'

const Project = (props) => {
  const {src, title, description, link, demo} = props.item;
  return (
 <container className="projects-container">
  
    <img src={src} alt="" className='project-image' />
    <div className='desc'>
        <h1 className='project-title'>{title}</h1>
        <p className='project-desc'>{description}</p>
        <li>
        <ul className='links'> 
        <a className="demo" href={demo}>Demo</a>
        <a className="demo" href={link}>Github</a>
        </ul>
        </li>
    </div>
     </container>
  )
}

export default Project