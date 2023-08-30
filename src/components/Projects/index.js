import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>

        <Title>Projects</Title>

        <Desc>
          {/* desc under construction... */}
        </Desc>

        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }

          <Divider />

          {toggle === 'software' ?
            <ToggleButton active value="software" onClick={() => setToggle('software')}>Software Development</ToggleButton>
            :
            <ToggleButton value="software" onClick={() => setToggle('software')}>Software Development</ToggleButton>
          }

          <Divider />

          {toggle === 'webDevelopment' ?
            <ToggleButton active value="webDevelopment" onClick={() => setToggle('webDevelopment')}>Web Development</ToggleButton>
            :
            <ToggleButton value="webDevelopment" onClick={() => setToggle('webDevelopment')}>Web Development</ToggleButton>
          }

          <Divider />

          {toggle === 'dataproject' ?
            <ToggleButton active value="dataproject" onClick={() => setToggle('dataproject')}>Data Analysis and Visualization</ToggleButton>
            :
            <ToggleButton value="dataproject" onClick={() => setToggle('dataproject')}>Data Analysis and Visualization</ToggleButton>
          }

        </ToggleButtonGroup>

        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
        
      </Wrapper>
    </Container>
  )
}

export default Projects