// import React from "react";
// import axios from "axios";
// import { useEffect,useState } from "react";
// import ProjectDetails from "../pages/ProjectDetails";
// export default function Table() {
//     const [project,setProject] = useState([]);
//     const getProjects = async ()=>{
//         try {
//             const response = await axios.get(`http://localhost:8080/uploaded/all`);
//             console.log('res',response)
//             const data = await response.data
//             setProject(data);
//             console.log('DATA',data)
          
//         } catch (error) {
//             console.log('error',error)
//         }
//     }
//     useEffect(()=>{
//         getProjects()
//     },[])
//     const projectDetails = async (problemStat)=>{
//       try {
//         const response =await axios.get(`http://localhost:8080/uploaded/${problemStat}`)
//         const data = await response.data;
//         console.log('data', data)
//       } catch (error) {
//         console.log('error', error)
//       }
//     }
    
//     return(
//         <div className="table-container">
//             <table id="example" className="table table-striped" style={{width:'100%'}}>
//                 <thead>
//                     <tr>
//                         <th className="sr">SrNo</th>
//                         <th className="probSt">Problem statement</th>
//                         <th className="category">Category</th>
//                         <th className="domain">Domain</th>
//                         <th className="det">Deatils</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//           {project.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>
//                 <p>{item.projectStatement}</p>
//               </td>
//               <td>{item.category}</td>
//               <td>{item.domain}</td>
//               {/* <td><a src={<ProjectDetails/>}>Show</a></td> */}
//               <td><Link to="/ProjectDetails">Show</Link></td>
//             </tr>
//           ))}
//         </tbody>
//             </table>
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "rc-pagination";


export default function Table() {
  const [project, setProject] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = project.slice(firstIndex, lastIndex);
  const npage = Math.ceil(project.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)



  

  const getProjects = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/uploaded/all`);
      const data = await response.data;
      setProject(data);
    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="table-container">
      <table id="example" className="table table-striped" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th className="sr">ProjectID</th>
            <th className="probSt">Problem statement</th>
            <th className="category">Category</th>
            <th className="domain">Domain</th>
            <th className="det">Details</th>
          </tr>
        </thead>
        <tbody>
          {project.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <p>{item.projectStatement}</p>
              </td>
              <td>{item.category}</td>
              <td>{item.domain}</td>
              <td>
                <Link to={`/ProjectDetails/${item.projectStatement}`}>Show</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={allData.length}
      /> */}
      <nav>
        <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n, i) => (
                <li className={`page_item ${currentPage === n ? 'active' : ''} `} key={i}>
                  <a href="#" className="page_item" onClick={changePage(n)}>{n}</a>
                </li>
              ))
            }
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>Next</a>
            </li>
        </ul>
      </nav>
    </div>
  );

  function prePage() {
    if(currentPage !== 1)
    {
      setCurrentPage(currentPage - 1)
    }
  }

  function nextPage(){
    if(currentPage !== npage)
    {
      setCurrentPage(currentPage + 1)
    }
  }

  function changePage(id) {
    setCurrentPage(id)
  }
}
