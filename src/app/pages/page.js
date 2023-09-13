'use client'

import { useEffect, useState } from 'react';
import { getGithubProjects } from './lib/github';

export default function Home () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const githubProjects = await getGithubProjects();
      setProjects(githubProjects);
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My GitHub Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
