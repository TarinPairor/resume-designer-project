import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import Contact from "./Contact";
import Experience from "./Experience";
import AddIcon from "@mui/icons-material/Add";
import "./Home.css";
import { ContactData } from "../interfaces/ContactData";
import { ExperienceData } from "../interfaces/ExperienceData";

function Home() {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState<{
    Contact: ContactData;
    Education: string;
    Expertise: string;
    Language: string;
  }>({
    Contact: {
      phoneNumber: "",
      email: "",
      facebook: "",
      linkedin: "",
      address: "",
    },
    Education: "",
    Expertise: "",
    Language: "",
  });
  const [experienceData, setExperienceData] = useState<ExperienceData>({
    org: "",
    city_state: "",
    position: "",
    date: "",
    body: "",
  });
  const [expArray, setExpArray] = useState<ExperienceData[]>([]);

  const handleAddExperience = () => {
    // Add the current experienceData to the expArray
    setExpArray([...expArray, experienceData]);

    // Clear the experienceData for the next entry
    setExperienceData({
      org: "",
      city_state: "",
      position: "",
      date: "",
      body: "",
    });
  };

  const handleDeleteExperience = (index: number) => {
    // Remove the experience at the specified index from the expArray
    const updatedExpArray = [...expArray];
    updatedExpArray.splice(index, 1);
    setExpArray(updatedExpArray);
  };

  const handleLockInData = () => {
    // Construct a newResumeData object with the input values
    const newResumeData = {
      Contact: contactData.Contact,
      Education: contactData.Education,
      Expertise: contactData.Expertise,
      Language: contactData.Language,
      Experience: expArray, // Pass the entire array of experiences
    };

    // Navigate to the Result page with the data passed as a URL query parameter
    navigate(`/result?data=${JSON.stringify(newResumeData)}`);
  };

  return (
    <div className="container">
      <div className="contact-form">
        <Contact
          contactData={contactData.Contact}
          setContactData={(newContactData) =>
            setContactData({ ...contactData, Contact: newContactData })
          }
        />
      </div>
      <div className="experience-section">
        <h4>
          Experience
          <AddIcon onClick={handleAddExperience} className="add-icon" />
        </h4>
        {expArray.map((exp, index: number) => (
          <Experience
            key={index}
            experienceData={exp}
            setExperienceData={(newExperienceData) => {
              const updatedExpArray = [...expArray];
              updatedExpArray[index] = newExperienceData;
              setExpArray(updatedExpArray);
            }}
            setDelete={() => handleDeleteExperience(index)}
          />
        ))}
      </div>
      <TextField
        type="text"
        placeholder="Education"
        value={contactData.Education}
        onChange={(e) =>
          setContactData({ ...contactData, Education: e.target.value })
        }
      />
      <TextField
        type="text"
        placeholder="Expertise"
        value={contactData.Expertise}
        onChange={(e) =>
          setContactData({ ...contactData, Expertise: e.target.value })
        }
      />
      <TextField
        type="text"
        placeholder="Languages"
        value={contactData.Language}
        onChange={(e) =>
          setContactData({ ...contactData, Language: e.target.value })
        }
      />
      <Button variant="contained" onClick={handleLockInData}>
        Lock In Data
      </Button>
    </div>
  );
}

export default Home;
