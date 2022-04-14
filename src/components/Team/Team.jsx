import React from 'react'
import { teams } from '../../data'
import Title from '../Title/Title'

const Team = () => {
  return (
    <section className='team_section'>
        <div className="container">
            <div className="row">
            <Title
            topText="Our Main Partners"
            mainText="Our Powerful Partners"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
                <ul className="team-list">
                 {
                     teams.map(team=>(
                        <li>
                            <div className="social-links">
                               <span className='icon1'>{team.icon1}</span>
                               <span className='icon1'>{team.icon2}</span>
                               <span className='icon1'>{team.icon3}</span>
                            </div>
                        <div className="team_profil">
                             <img src={team.img} alt="" />
                        </div>
                         <span className='team-name'>{team.name}</span>
                         <span className='divider'></span>
                         <p>Company Ceo</p>
                     </li>
                     ))
                 }
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Team