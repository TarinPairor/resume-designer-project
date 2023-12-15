import { TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ExperienceData } from "../interfaces/ExperienceData";
//import "./Experience.css";

// Define a prop interface for Experience component
interface ExperienceProps {
  experienceData: ExperienceData;
  setExperienceData: (data: ExperienceData) => void;
  setDelete?: () => void;
}

function Experience({
  experienceData,
  setExperienceData,
  setDelete,
}: ExperienceProps) {
  return (
    <div className="container">
      <div className="delete-icon" onClick={setDelete}>
        <DeleteIcon />
      </div>
      <h4>Experience</h4>
      <TextField
        type="text"
        label="Name/Organization"
        value={experienceData.org}
        onChange={(e) =>
          setExperienceData({ ...experienceData, org: e.target.value })
        }
      />
      <TextField
        type="text"
        label="City/State"
        value={experienceData.city_state}
        onChange={(e) =>
          setExperienceData({ ...experienceData, city_state: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Position"
        value={experienceData.position}
        onChange={(e) =>
          setExperienceData({ ...experienceData, position: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Date"
        value={experienceData.date}
        onChange={(e) =>
          setExperienceData({ ...experienceData, date: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Responsibilities"
        value={experienceData.body}
        onChange={(e) =>
          setExperienceData({ ...experienceData, body: e.target.value })
        }
      />
    </div>
  );
}

export default Experience;
