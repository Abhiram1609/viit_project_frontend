// import axios from 'axios'
// import React, { useEffect } from 'react'

// export default function Currentuploaded() {
//   const myproject = async() =>{
//     try {
//       const email = localStorage.getItem('email');
//       const response = await axios.get(`http://localhost:8080/uploaded-by/${email}`)
//       console.log('dataa', response.data)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }
//   useEffect(()=>{
//    myproject()
//   },[])
//   return (
//     <div>
      
//     </div>
//   )
// }


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Currentuploaded() {
  const [projects, setProjects] = useState([]);

  const myproject = async () => {
    try {
      const email = localStorage.getItem('email');
      const response = await axios.get(`http://localhost:8080/uploaded-by/${email}`);
      console.log('dataa', response.data);

      // Set the retrieved projects in the state
      setProjects(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };
  

  useEffect(() => {
    myproject();
  }, []);

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.projectStatement}>
            {/* Display project details as needed */}
            <Link to={`/ProjectDetails/${project.projectStatement}`}>
              {project.projectStatement}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

