// Install Bootstrap by running: npm install bootstrap
import React, { useState ,useEffect} from 'react';
import './VideoPage.css';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import NavbarCustom from '../Home componets/Navbar_custom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const VideoPage = () => {
    const [project,setProject]=useState([]);
    const { projectStatement } = useParams();
    
    const getProject = async () => {
        
        try {
          const response = await axios.get(`http://localhost:8080/uploaded/${projectStatement}`);
          const data = await response.data;
          setProject(data);
          console.log('project', data)
        } catch (error) {
          console.log('error', error)
        }
      };
    
      useEffect(() => {
        getProject();
      }, []);
  return (
    <>
    <NavbarCustom />
    <Container className="video-page">
      <Row>
        <h1>Project Details</h1>
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
                {/* <Badge variant="primary">Tag 1</Badge>{' '}
                <Badge variant="info">Tag 2</Badge>{' '}
                <Badge variant="success">Tag 3</Badge> */}

                {project.stringTag}
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
