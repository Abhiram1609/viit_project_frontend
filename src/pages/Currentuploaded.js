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
      const response = await axios.get(`https://backend-production-63aa.up.railway.app/uploaded-by/${email}`);
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

  // return (
  //   <div>
  //     <ul className='curr-upload'>
  //       {projects.map((project) => (
  //         <p key={project.projectStatement} className='curr-upload-card'>
  //           <Link to={`/ProjectDetails/${project.projectStatement}`}>
  //             {project.projectStatement}
  //           </Link>
  //         </p>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
      <div>
        <ul className='curr-upload'>
          {projects.map((project) => (
            <p key={project.projectStatement}>
              <Link className='custom-link' to={`/ProjectDetails/${project.projectStatement}`}>
                <div className='curr-upload-card'>
                  {project.projectStatement}
                </div>
              </Link>
            </p>
          ))}
        </ul>
      </div>
    );
}

