import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Table() {
  const [project, setProject] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = project.slice(firstIndex, lastIndex);
  const npage = Math.ceil(project.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

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
          {records.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
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
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page_item ${currentPage === n ? "active" : ""} `}
              key={i}
            >
              <a href="#" className="page_item" onClick={changePage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}