import { useLocation, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import { ExperienceData } from "../interfaces/ExperienceData";
import "./Result.css";

function Result() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const dataString = queryParams.get("data");

  // Parse the data string into a JavaScript object
  const data = dataString ? JSON.parse(dataString) : null;

  return (
    <div>
      <h2>Result</h2>
      {data && (
        <div className="container">
          <div className="contact-form">
            <h3>Contact</h3>
            {/* Display Contact Information */}
            {data.Contact.phoneNumber && (
              <div className="phone-number">
                <PhoneIcon />
                <p>
                  <b>Phone Number:</b> {data.Contact.phoneNumber}
                </p>
              </div>
            )}
            {data.Contact.email && (
              <div className="email">
                <GoogleIcon />
                <p>
                  <b>Email:</b> {data.Contact.email}
                </p>
              </div>
            )}
            {data.Contact.facebook && (
              <div className="facebook">
                <FacebookIcon />
                <p>
                  <b>Facebook:</b> {data.Contact.facebook}
                </p>
              </div>
            )}
            {data.Contact.linkedin && (
              <div className="linkedin">
                <LinkedInIcon />
                <p>
                  <b>LinkedIn:</b> {data.Contact.linkedin}
                </p>
              </div>
            )}
            {data.Contact.address && (
              <div className="address">
                <HomeIcon />
                <p>
                  <b>Address:</b> {data.Contact.address}
                </p>
              </div>
            )}
          </div>
          <hr className="solid" />
          <div className="experience-section">
            <h4>Experience</h4>
            {/* Display Experience Information */}
            {data.Experience && data.Experience.length > 0 ? (
              data.Experience.map((exp: ExperienceData, index: number) => (
                <div key={index} className="experience">
                  <p>
                    <b>Organization:</b> {exp.org}
                  </p>
                  <p>
                    <b>City/State:</b> {exp.city_state}
                  </p>
                  <p>
                    <b>Position:</b> {exp.position}
                  </p>
                  <p>
                    <b>Date:</b> {exp.date}
                  </p>
                  <p>
                    <b>Responsibilities:</b> {exp.body}
                  </p>
                </div>
              ))
            ) : (
              <p>No experience data available.</p>
            )}
          </div>
          <hr className="solid" />
          <div className="other-info">
            {/* Display Education, Expertise, and Language */}
            {data.Education && <p>Education: {data.Education}</p>}
            {data.Expertise && <p>Expertise: {data.Expertise}</p>}
            {data.Language && <p>Language: {data.Language}</p>}
          </div>
        </div>
      )}
      <Link to="/" relative="path">
        Link
      </Link>
    </div>
  );
}

export default Result;
