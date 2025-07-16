import './showproject.css'
import { projects } from '../../data/projects'
import { Card } from '../../components'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Showproject = () => {
  const location = useLocation();
  const path = location.pathname;

  const typeFilter = path.includes('games') ? 'Game'
                   : path.includes('websites') ? 'Website'
                   : null;

  const filteredProjects = typeFilter
    ? projects.filter(project => project.type === typeFilter)
    : projects;

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(start, start + itemsPerPage);

  return (
    <>
      <div className="dh__projects-cards">
        {currentProjects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>

      <div className="dh__projects-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default Showproject
