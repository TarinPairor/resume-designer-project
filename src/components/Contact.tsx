import { TextField } from "@mui/material";
interface ContactData {
  phoneNumber: string;
  email: string;
  facebook: string;
  linkedin: string;
}

// Define a prop interface for Contact component
interface ContactProps {
  contactData: ContactData;
  setContactData: (data: ContactData) => void;
}

function Contact({ contactData, setContactData }: ContactProps) {
  return (
    <div>
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
    </div>
  );
}

export default Contact;
