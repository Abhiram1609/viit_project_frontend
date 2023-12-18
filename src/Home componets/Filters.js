// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import './MyDropdown.css'; 

// import { Form } from "react-bootstrap";
// import { InputGroup } from "react-bootstrap";


// export default function MyDropdown() {
//   const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
//   const [selectedOptionDomain, setSelectedOptionDomain] = useState('');
//   const [selectedOptionIndustry, setSelectedOptionIndustry] = useState('');
//   const [selectedOptionDepartment, setSelectedOptionDepartment] = useState('');

//   const [search, setSearch] = useState('');
//   console.log(search);

//   const Category = (event) => {
//     setSelectedOptionCategory(event.target.value);
//   };

//   const Domain = (event) => {
//     setSelectedOptionDomain(event.target.value);
//   };

//   const Industry = (event) => {
//     setSelectedOptionIndustry(event.target.value);
//   };

//   const Department = (event) => {
//     setSelectedOptionDepartment(event.target.value);
//   };

  

  
//   const [project, setProject] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 10;
//   const lastIndex = currentPage * recordsPerPage;
//   const firstIndex = lastIndex - recordsPerPage;
//   const records = project.slice(firstIndex, lastIndex);
//   const npage = Math.ceil(project.length / recordsPerPage);
//   const numbers = [...Array(npage + 1).keys()].slice(1);


//   const getProjects = async () => {
//     try {
//       const response = await axios.get(`https://backend-production-63aa.up.railway.app/uploaded/all`);
//       const data = await response.data;
//       setProject(data);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);

//   function prePage() {
//     if (currentPage !== 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   }

//   function nextPage() {
//     if (currentPage !== npage) {
//       setCurrentPage(currentPage + 1);
//     }
//   }

//   function changePage(id) {
//     return () => {
//       setCurrentPage(id);
//     };
//   }

//   return (
//     <>
//       <div className="container mt-4"> {/* Bootstrap container class */}
//         <div className="filters row">
//           <div className="filter-dropdown col-12 col-md-6 col-lg-4">
//             <label htmlFor="categoryDropdown">Select Category:</label>
//             <select
//               id="categoryDropdown"
//               value={selectedOptionCategory}
//               onChange={Category}
//               className="form-control category-btn"
//             >
//               <option value="">-- Select --</option>
//               <option value="Software">Software</option>
//               <option value="Hardware">Hardware</option>
//             </select>
//             <p>Selected option: {selectedOptionCategory}</p>
//           </div>

//           <div className="filter-dropdown col-12 col-md-6 col-lg-4">
//             <label htmlFor="domainDropdown">Select Domain:</label>
//             <select
//               id="domainDropdown"
//               value={selectedOptionDomain}
//               onChange={Domain}
//               className="form-control category-btn"
//             >
//               <option value="">-- Select --</option>
//               {selectedOptionCategory === "Software" && (
//                 <>
//                   <option value="Web Development">Web Development</option>
//                   <option value="Android Development">Android Development</option>
//                   <option value="ML">ML</option>
//                 </>
//               )}
//               {selectedOptionCategory === "Hardware" && (
//                 <>
//                   <option value="IoT">IoT</option>
//                   <option value="Embedded Systems">Embedded systems</option>
//                   <option value="Verilog">Verilog</option>
//                   <option value="IC design">IC design</option>
//                 </>
//               )}
//             </select>
//             <p>Selected option: {selectedOptionDomain}</p>
//           </div>

//           <div className="filter-dropdown col-12 col-md-6 col-lg-4">
//             <label htmlFor="industryDropdown">Industry/In-house:</label>
//             <select
//               id="industryDropdown"
//               value={selectedOptionIndustry}
//               onChange={Industry}
//               className="form-control category-btn"
//             >
//               <option value="">-- Select --</option>
//               <option value="Industry">Industry</option>
//               <option value="In-house">In-House</option>
//             </select>
//             <p>Selected option: {selectedOptionIndustry}</p>
//           </div>

//           <div className="filter-dropdown col-12 col-md-6 col-lg-4">
//             <label htmlFor="departmentDropdown">Select Department:</label>
//             <select
//               id="departmentDropdown"
//               value={selectedOptionDepartment}
//               onChange={Department}
//               className="form-control category-btn"
//             >
//               <option value="">-- Select --</option>
//               <option value="Computer">Computer</option>
//               <option value="IT">IT</option>
//               <option value="AIDS">AIDS</option>
//               <option value="Mechanical">Mechanical</option>
//               <option value="Civil">Civil</option>
//               <option value="Entc">Entc</option>
//               <option value="Instrumentation">Instrumentation</option>
//             </select>
//             <p>Selected option: {selectedOptionDepartment}</p>
//           </div>
//         </div>
//       </div>
//       <Form>
//       <InputGroup className="my-3">
//         <Form.Control 
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search Projects"
//         />
//       </InputGroup>
//     </Form>
//       <div className="table-container">
//         <table id="example" className="table table-striped" style={{ width: '100%' }}>
//           <thead>
//             <tr>
//               <th className="sr">ProjectID</th>
//               <th className="probSt">Problem statement</th>
//               <th className="category">Category</th>
//               <th className="domain">Domain</th>
//               <th className="sr">Department</th>
//               <th className="det">Details</th>
//             </tr>
//           </thead>
//           <tbody>
//           {records.filter((item) => {
//             return search.toLowerCase() === '' ? item : item.projectStatement.toLowerCase().includes(search)
//           }) .map((item, index) => (
//             <tr key={index}>
//               <td>{item.projectId}</td>
//               <td>
//                 <p>{item.projectStatement}</p>
//               </td>
//               <td>{item.category}</td>
//               <td>{item.domain}</td>
//               <td>{item.department}</td>
//               <td>
//                 <div className="show-btn">
//                   <Link className="custom-link" to={`/ProjectDetails/${item.projectStatement}`}>Show</Link>
//                 </div>
//               </td>
//             </tr>
//           ))
//             .slice(firstIndex, lastIndex)}
//         </tbody>
//         </table>
//         <nav>
//           <ul className="pagination">
//             <li className="page-item">
//               <a href="#" className="page-link" onClick={prePage}>
//                 Prev
//               </a>
//             </li>
//             {numbers.map((n, i) => (
//               <li
//                 className={`page_item ${currentPage === n ? "active" : ""} `}
//                 key={i}
//               >
//                 <a href="#" className="page_item" onClick={changePage(n)}>
//                   {n}
//                 </a>
//               </li>
//             ))}
//             <li className="page-item">
//               <a href="#" className="page-link" onClick={nextPage}>
//                 Next
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './MyDropdown.css'; 

import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";


export default function MyDropdown() {
  const [selectedOptionCategory, setSelectedOptionCategory] = useState('');
  const [selectedOptionDomain, setSelectedOptionDomain] = useState('');
  const [selectedOptionIndustry, setSelectedOptionIndustry] = useState('');
  const [selectedOptionDepartment, setSelectedOptionDepartment] = useState('');

  const [search, setSearch] = useState('');
  console.log(search);

  const Category = (event) => {
    setSelectedOptionCategory(event.target.value);
  };

  const Domain = (event) => {
    setSelectedOptionDomain(event.target.value);
  };

  const Industry = (event) => {
    setSelectedOptionIndustry(event.target.value);
  };

  const Department = (event) => {
    setSelectedOptionDepartment(event.target.value);
  };

  

  
  const [project, setProject] = useState([]);


  const getProjects = async () => {
    try {
      const response = await axios.get(`https://backend-production-63aa.up.railway.app/uploaded/all`);
      const data = await response.data;
      setProject(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = project.slice(firstIndex, lastIndex);
  const npage = Math.ceil(project.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id) {
    return () => {
      setCurrentPage(id);
    }; 
  }



  return (
    <>
      <div className="container mt-4"> {/* Bootstrap container class */}
        <div className="filters row">
          <div className="filter-dropdown col-12 col-md-6 col-lg-4">
            <label htmlFor="categoryDropdown">Select Category:</label>
            <select
              id="categoryDropdown"
              value={selectedOptionCategory}
              onChange={Category}
              className="form-control category-btn"
            >
              <option value="">-- Select --</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
            </select>
            <p>Selected option: {selectedOptionCategory}</p>
          </div>

          <div className="filter-dropdown col-12 col-md-6 col-lg-4">
            <label htmlFor="domainDropdown">Select Domain:</label>
            <select
              id="domainDropdown"
              value={selectedOptionDomain}
              onChange={Domain}
              className="form-control category-btn"
            >
              <option value="">-- Select --</option>
              {selectedOptionCategory === "Software" && (
                <>
                  <option value="Web Development">Web Development</option>
                  <option value="Android Development">Android Development</option>
                  <option value="ML">ML</option>
                </>
              )}
              {selectedOptionCategory === "Hardware" && (
                <>
                  <option value="IoT">IoT</option>
                  <option value="Embedded Systems">Embedded systems</option>
                  <option value="Verilog">Verilog</option>
                  <option value="IC design">IC design</option>
                </>
              )}
            </select>
            <p>Selected option: {selectedOptionDomain}</p>
          </div>

          <div className="filter-dropdown col-12 col-md-6 col-lg-4">
            <label htmlFor="industryDropdown">Industry/In-house:</label>
            <select
              id="industryDropdown"
              value={selectedOptionIndustry}
              onChange={Industry}
              className="form-control category-btn"
            >
              <option value="">-- Select --</option>
              <option value="Industry">Industry</option>
              <option value="In-house">In-House</option>
            </select>
            <p>Selected option: {selectedOptionIndustry}</p>
          </div>

          <div className="filter-dropdown col-12 col-md-6 col-lg-4">
            <label htmlFor="departmentDropdown">Select Department:</label>
            <select
              id="departmentDropdown"
              value={selectedOptionDepartment}
              onChange={Department}
              className="form-control category-btn"
            >
              <option value="">-- Select --</option>
              <option value="Computer">Computer</option>
              <option value="IT">IT</option>
              <option value="AIDS">AIDS</option>
              <option value="Mechanical">Mechanical</option>
              <option value="Civil">Civil</option>
              <option value="Entc">Entc</option>
              <option value="Instrumentation">Instrumentation</option>
            </select>
            <p>Selected option: {selectedOptionDepartment}</p>
          </div>
        </div>
      </div>
      <Form>
      <InputGroup className="my-3">
        <Form.Control 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Projects"
        />
      </InputGroup>
    </Form>
      <div className="table-container">
        <table id="example" className="table table-striped" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th className="sr">ProjectID</th>
              <th className="probSt">Problem statement</th>
              <th className="category">Category</th>
              <th className="domain">Domain</th>
              <th className="sr">Department</th>
              <th className="det">Details</th>
            </tr>
          </thead>
          <tbody>
          {project
              .filter((item) => (
                (selectedOptionCategory === '' || item.category.toLowerCase() === selectedOptionCategory.toLowerCase()) &&
                (selectedOptionDomain === '' || item.domain.toLowerCase() === selectedOptionDomain.toLowerCase()) &&
                (selectedOptionIndustry === '' || item.industry.toLowerCase() === selectedOptionIndustry.toLowerCase()) &&
                (selectedOptionDepartment === '' || item.department.toLowerCase() === selectedOptionDepartment.toLowerCase()) &&
                (search === '' ||
                  item.projectStatement.toLowerCase().includes(search.toLowerCase()) ||
                  item.category.toLowerCase().includes(search.toLowerCase()) ||
                  item.domain.toLowerCase().includes(search.toLowerCase()) ||
                  item.department.toLowerCase().includes(search.toLowerCase())
                )
              ))      .slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage)
           .map((item, index) => (
            <tr key={index}>
              <td>{item.projectId}</td>
              <td>
                <p>{item.projectStatement}</p>
              </td>
              <td>{item.category}</td>
              <td>{item.domain}</td>
              <td>{item.department}</td>
              <td>
                <div className="show-btn">
                  <Link className="custom-link" to={`/ProjectDetails/${item.projectStatement}`}>Show</Link>
                </div>
              </td>
            </tr>
          ))
          }
        </tbody>
        </table>
        <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {/* {numbers.map((n, i) => (
            <li
            className={`page_item ${currentPage === n ? "active" : ""} `}
            key={i}
            >
              <a href="#" className="page-no" onClick={changePage(n)}>
                <div className="page-no">
                  {n}
                </div>
              </a>
            </li>
          ))} */}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </>
  );
}


