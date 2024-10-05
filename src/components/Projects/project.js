import React from 'react';
import './project.css';
import Img1 from '../../assets/project1.png';
import Img2 from '../../assets/project2.png';
import Img3 from '../../assets/project3.png';

const data = [
    {
        id: 1,
        image: Img1,
        title: 'Track Master-Smart Camera Bag',
        github: 'https://github.com/NethminiWGK/Track-Master----Smart-Camera-Bag'

    },

    {
        id: 2,
        image: Img2,
        title: 'Welfare Management System',
        github: 'https://github.com'

    },

    {
        id: 3,
        image: Img3,
        title: 'Book Shop Website',
        github: 'https://github.com/NethminiWGK/BookShopProject'

    }
]

const Project = () => {
  return (
    <section id = 'project'>
        <span className='projectTitle'>My Recent Works</span>
        <div className='projectContent'>
            {
                data.map(({id,image,title,github}) => {
                    return (
                        <article key={id} className='projectItem'>
                        <div className='projectImage'>
                        <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className='projectItemCta'>
                        <a href={github} className='btn'>Github</a>
                        </div>
                        </article>
                    )
            })

           }
        </div>
    </section>

  )
}
export default Project;