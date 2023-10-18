import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import Contact from "./Contact";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({
    Contact: {
      phoneNumber: "",
      email: "",
      facebook: "",
      linkedin: "",
    },
    Education: "",
    Expertise: "",
    Language: "",
  });

  const handleLockInData = () => {
    // Construct a newResumeData object with the input values
    const newResumeData = {
      Contact: resumeData.Contact,
      Education: resumeData.Education,
      Expertise: resumeData.Expertise,
      Language: resumeData.Language,
    };

    // Navigate to the Result page with the data passed as a URL query parameter
    navigate(`/result?data=${JSON.stringify(newResumeData)}`);
  };

  return (
    <div className="container">
      <div className="contact-form">
        <Contact
          contactData={resumeData.Contact}
          setContactData={(newContactData: {
            phoneNumber: string;
            email: string;
            facebook: string;
            linkedin: string;
          }) => setResumeData({ ...resumeData, Contact: newContactData })}
        />
      </div>
      <TextField
        type="text"
        placeholder="Education"
        value={resumeData.Education}
        onChange={(e) =>
          setResumeData({ ...resumeData, Education: e.target.value })
        }
      />
      <TextField
        type="text"
        placeholder="Expertise"
        value={resumeData.Expertise}
        onChange={(e) =>
          setResumeData({ ...resumeData, Expertise: e.target.value })
        }
      />
      <TextField
        type="text"
        placeholder="Languages"
        value={resumeData.Language}
        onChange={(e) =>
          setResumeData({ ...resumeData, Language: e.target.value })
        }
      />
      <Button variant="contained" onClick={handleLockInData}>
        Lock In Data
      </Button>
    </div>
  );
}

export default Home;
