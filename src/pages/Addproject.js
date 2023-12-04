import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { TagsInput } from 'react-tag-input-component';
import { useEffect } from 'react';

const AddProjectPage = () => {
  
  const [project_type, setProjectType] = useState('inhouse');
  const [department, setDepartment] = useState('');
  const [category, setCategory] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectStatement, setProblemStatement] = useState('');
  const [techStack, setTechStack] = useState('');
  const [group_members, setGroupMembers] = useState('');
  const [faculty_name, setFacultyName] = useState('');
  const [faculty_email, setFacultyEmail] = useState('');
  const [paperlink, setResearchPaperLink] = useState('');
  const [domain, setDomain] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [srsUploadedLink, setSrsDocx] = useState(null); // For file input
  const [videoUploadedLink, setProjectVideo] = useState(null); // For file input
  const [offerLetter, setOfferLetter] = useState(null); // For file input
  const [tags,setTags]=useState([]);
  const [stringTag, setStringTag] = useState('');
  const [email,setEmail] = useState('')
  const postDataToBackend = async (data) => {
    try {
      
      const response = await axios.post(`http://localhost:8080/add/${email}`, data);
      console.log('data', data)
      console.log('add', email)
      console.log('response', response)
      console.log('Data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_6lygob9';
    const templateId = 'template_5k0cdsc';
    const publicKey = 'KSzZyIIVZAPtbc77U';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: group_members,
      from_email: faculty_email,
      to_name: 'Web Wizard',
      message: paperlink,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        alert('Email sent successfully!', response);
       
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
   
    const handleTagsChange = (tags) => {
      console.log('tages',tags)
    setTags( tags );
    let stringtags = tags.toString()
    setStringTag(stringtags);
    console.log('string', stringTag)
    // setTags(`${tags}`)

  };
  const handleSrsDocxUpload = async () => {
    const formData = new FormData();
    formData.append("file", srsUploadedLink);
    formData.append("upload_preset", "t53wj7bi");
    formData.append("cloud_name", "toyesh");
    formData.append('api_key', "959387661847641");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/t53wj7bi/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const fileData = await response.json();
        const srsDocxUrl = await fileData.secure_url;
        setSrsDocx(srsDocxUrl);
        console.log('link',srsUploadedLink)
        console.log("SRS Docx uploaded successfully:", srsDocxUrl);
        
        // Now you can use srsDocxUrl as needed (e.g., save it in your database)
      } else {
        console.log("Error uploading the SRS docx file to Cloudinary.");
      }
    } catch (error) {
      console.error("An error occurred while uploading the SRS docx file:", error);
    }
  };

  const handleOfferLetterUpload = async () => {
    const formData = new FormData();
    formData.append("file", offerLetter);
    formData.append("upload_preset", "t53wj7bi");
    formData.append("cloud_name", "toyesh");
    formData.append('api_key', "959387661847641");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/t53wj7bi/image/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const fileData = await response.json();
        const offerLetterUrl = await fileData.secure_url;
        console.log("Offer Letter uploaded successfully:", offerLetterUrl);
        // Now you can use offerLetterUrl as needed (e.g., save it in your database)
      } else {
        console.log("Error uploading the offer letter file to Cloudinary.");
      }
    } catch (error) {
      console.error("An error occurred while uploading the offer letter file:", error);
    }
  };
  const handleProjectVideoUpload = async () => {
    const formData = new FormData();
    formData.append("file",videoUploadedLink);
    formData.append("upload_preset", "t53wj7bi");
    formData.append("cloud_name", "toyesh");
    formData.append('api_key', "959387661847641");

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/t53wj7bi/video/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const fileData = await response.json();
        const projectVideoUrl = await fileData.secure_url;
        setProjectVideo(projectVideoUrl)
        console.log("Project Video uploaded successfully:", projectVideoUrl);
         } else {
        console.log("Error uploading the project video file to Cloudinary.");
      }
    } catch (error) {
      console.error("An error occurred while uploading the project video file:", error);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (project_type === 'inhouse' && srsUploadedLink) {
      await handleSrsDocxUpload();
    }

    if (project_type === 'industrial' && srsUploadedLink) {
      await handleOfferLetterUpload();
    }

    if (videoUploadedLink) {
      await handleProjectVideoUpload();
    }
    // const dataToSend = {
    //   project_type,
    //   department,
    //   category,
    //   projectTitle,
    //   projectStatement,
    //   techStack,
    //   group_members,
    //   faculty_name,
    //   faculty_email,
    //   paperlink,
    //   domain,
    //   githubLink,
    //   srsUploadedLink,
    //   videoUploadedLink,
    //   stringTag,
    // };
    // await postDataToBackend(dataToSend);
    
  };
  useEffect(() => {
    if (srsUploadedLink) {
       const dataToSend = {
      project_type,
      department,
      category,
      projectTitle,
      projectStatement,
      techStack,
      group_members,
      faculty_name,
      faculty_email,
      paperlink,
      domain,
      githubLink,
      srsUploadedLink,
      videoUploadedLink,
      stringTag,
    };

      // Example: Call the next function or API request
      postDataToBackend(dataToSend);
    }
  }, [project_type,
    department,
    category,
    projectTitle,
    projectStatement,
    techStack,
    group_members,
    faculty_name,
    faculty_email,
    paperlink,
    domain,
    githubLink,
    srsUploadedLink,
    videoUploadedLink,
    stringTag,postDataToBackend]);
 useEffect(()=>{
    let email = localStorage.getItem('email');
    setEmail(email);
 },[]);

  return (
    <Form onSubmit={handleSubmit} className="add-project-form">
      <Form.Group controlId="projectType">
      <Form.Label>Project Type</Form.Label>
      <div>
        <Form.Check
          type="radio"
          label="Inhouse"
          value="inhouse"
          checked={project_type === 'inhouse'}
          onChange={(e) => setProjectType(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Industrial"
          value="industrial"
          checked={project_type === 'industrial'}
          onChange={(e) => setProjectType(e.target.value)}
        />
      </div>
    </Form.Group>
    <Form.Group controlId="department">
        <Form.Label>Department</Form.Label>
        <Form.Control
          type="text"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="projectTitle">
      <Form.Label>Project Title</Form.Label>
      <Form.Control
        type="text"
        name="projectTitle"
        value={projectTitle}
        onChange={(e)=>setProjectTitle(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="problemStatement">
      <Form.Label>Project Statement</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        name="projectStatement"
        value={projectStatement}
        
        onChange={(e)=>setProblemStatement(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="techStack">
      <Form.Label>Tech Stack</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        name="techStack"
        value={techStack}
        onChange={(e)=>setTechStack(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="groupMembers">
      <Form.Label>Group Members</Form.Label>
      <Form.Control
        as="textarea"
        rows={4}
        name="group_members"
        value={group_members}
        onChange={(e)=>setGroupMembers(e.target.value)}
        // required
      />
    </Form.Group>

    <Form.Group controlId="facultyName">
      <Form.Label>Faculty Name</Form.Label>
      <Form.Control
        as="textarea"
        rows={2}
        name="faculty_name"
        value={faculty_name}
        onChange={(e)=>setFacultyName(e.target.value)}
        required
      />
    </Form.Group>
    <Form.Group controlId="email">
        <Form.Label>Faculty Email Address</Form.Label>
        <Form.Control
         as="textarea"
          rows={1}
          type="email"
          name="faculty_email"
          value={faculty_email}
          onChange={(e) => setFacultyEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="paperlink">
      <Form.Label>Research PaperLink</Form.Label>
      <Form.Control
        as="textarea"
        rows={1}
        name="paperlink"
        value={paperlink}
        onChange={(e) => setResearchPaperLink(e.target.value)}
        required
      />
      </Form.Group>
      <Button variant="transparent"  style={{backgroundColor:'blue' , color: 'white' ,marginBottom:'2px' }} onClick={handleSendEmail} type="Send email">
            Send Email
      </Button>
    < Form.Group controlId="domain">
        <Form.Label>Domain</Form.Label>
        <Form.Control
          type="text"
          name="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          required
        />
      </Form.Group>

    {project_type === 'inhouse' && (
      <>
        <Form.Group controlId="githubLink">
          <Form.Label>Github Link</Form.Label>
          <Form.Control
            type="url"
            name="githubLink"
            value={githubLink}
           
            onChange={(e)=>setGithubLink(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="srsDocx">
          <Form.Label>SRS Document (Docx)</Form.Label>
          <Form.Control
            type="file"
            name="srsUploadedLink"
            accept=".pdf"
            
            onChange={(e)=>{setSrsDocx(e.target.files[0])
            console.log('files',e.target.files[0])}}
            required
          />
        </Form.Group>
      </>
    )}
      {project_type === 'industrial' && (
      <Form.Group controlId="offerLetter">
        <Form.Label>Offer Letter (PDF)</Form.Label>
        <Form.Control
          type="file"
          name="srsUploadedLink"
          accept=".pdf"
          
          onChange={(e) => setOfferLetter(e.target.files[0])}
          required
        />
       
      </Form.Group>
  
    )}
    

    <Form.Group controlId="projectVideo">
      <Form.Label>Project Video (Max 10MB)</Form.Label>
      <Form.Control
        type="file"
        name="videoUploadedLink"
        accept=".mp4, .avi, .mkv"
      
        
        onChange={(e)=>setProjectVideo(e.target.files[0])}
        required
      />

    </Form.Group>
  

   <em>Enter tags</em>
   <TagsInput
      value={tags} // Use formData.tags as the value
      onChange={handleTagsChange} // Handle changes in tags
      name="tags"
      placeHolder="enter tags"
    />
    <em>press enter to add new tag</em>
    <br></br>
    <br></br>


    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
  );
};

export default AddProjectPage;