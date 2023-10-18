import { useLocation, Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
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
        <div>
          <div className="contact-form">
            <h3>Contact</h3>
            <div className="phone-number">
              <PhoneIcon />
              <p>Phone Number: {data.Contact.phoneNumber}</p>
            </div>
            <div className="email">
              <GoogleIcon />
              <p>Email: {data.Contact.email}</p>
            </div>
            <div className="facebook">
              <FacebookIcon />
              <p>Facebook: {data.Contact.facebook}</p>
            </div>
            <div className="linkedin">
              <LinkedInIcon />
              <p>LinkedIn: {data.Contact.linkedin}</p>
            </div>
          </div>
          <h3>Education: {data.Education}</h3>
          <h3>Expertise: {data.Expertise}</h3>
          <h3>Language: {data.Language}</h3>
        </div>
      )}
      <Link to="/" relative="path">
        Link
      </Link>
    </div>
  );
}

export default Result;
