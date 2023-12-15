import { TextField } from "@mui/material";
import { ContactData } from "../interfaces/ContactData";
import "./Contact.css";

// Define a prop interface for Contact component
interface ContactProps {
  contactData: ContactData;
  setContactData: (data: ContactData) => void;
}

function Contact({ contactData, setContactData }: ContactProps) {
  return (
    <div className="container">
      <h4>Personal Details</h4>
      <TextField
        type="text"
        label="Phone Number"
        value={contactData.phoneNumber}
        onChange={(e) =>
          setContactData({ ...contactData, phoneNumber: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Email"
        value={contactData.email}
        onChange={(e) =>
          setContactData({ ...contactData, email: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Facebook"
        value={contactData.facebook}
        onChange={(e) =>
          setContactData({ ...contactData, facebook: e.target.value })
        }
      />
      <TextField
        type="text"
        label="LinkedIn"
        value={contactData.linkedin}
        onChange={(e) =>
          setContactData({ ...contactData, linkedin: e.target.value })
        }
      />
      <TextField
        type="text"
        label="Address"
        value={contactData.address}
        onChange={(e) =>
          setContactData({ ...contactData, address: e.target.value })
        }
      />
    </div>
  );
}

export default Contact;
