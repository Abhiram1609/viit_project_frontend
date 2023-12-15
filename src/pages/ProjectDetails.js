import React, { useState, useEffect } from 'react';
import './VideoPage.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import NavbarCustom from '../Home componets/Navbar_custom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const [project, setProject] = useState([]);
  const [marks, setMarks] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const { projectStatement } = useParams();
  const userEmail = localStorage.getItem('email');  

  const getProject = async () => {
    try {
      const response = await axios.get(`https://backend-production-63aa.up.railway.app/uploaded/${projectStatement}`);
      const data = await response.data;
      setProject(data);
  
      setMarks(data.marks || 0);

      setShowEdit(data.faculty_email === userEmail);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const handleEditMarks = () => {
    // Add logic to handle editing marks, e.g., open a modal or navigate to a new page
    console.log('Editing marks...');
  };

  return (
    <>
    <NavbarCustom />
    <Container className="video-page">
      <Row>
        <h1>{project.projectStatement}</h1>
        <Col md={4}>
          
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Problem Statement</Card.Title>
              <Card.Text>{project.projectStatement}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="info-card">
            <Card.Body>
              <Card.Title>Tech Stack</Card.Title>
              <Card.Text>{project.techStack}</Card.Text>
            </Card.Body>
          </Card>

          <Card className="info-card">
            <Card.Body>
              <Card.Title>Links</Card.Title>
              <ul>
                <li>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={project.paperlink} target="_blank" rel="noopener noreferrer">
                    Research Paper
                  </a>
                </li>
                <li>
                  <a href={project.srsUploadedLink} target="_blank" rel="noopener noreferrer">
                    SRS
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="info-card">
            <Card.Body>
              <Card.Title>Group Members</Card.Title>
              <Card.Text>
              {project.group_members}
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="info-card">
            <Card.Body>
              <Card.Title>Assigned Faculty</Card.Title>
              <Card.Text>{project.faculty_name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
        <Card className="marks-box">
            <Card.Body>
              <div className="marks-text">{`${marks}/10 Marks`}</div>
              {showEdit && (
                <button className="edit-marks-btn" onClick={handleEditMarks}>
                  Edit Marks
                </button>
              )}
            </Card.Body>
        </Card>
          <div className="video-container">
            <iframe
              title="Example Video"
              width="100%"
              height="400"
              src={project.videoUploadedLink}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <Card className="info-card">
            <Card.Body>
              <Card.Title>Tags</Card.Title>
              <Card.Text>
                <div className='tag-card-main'>
                  {project.stringTag?.split(",").map((tag)=>(
                    <p  className='tag-card'>{tag}</p>
                  ))}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</>
  );
};

export default VideoPage;