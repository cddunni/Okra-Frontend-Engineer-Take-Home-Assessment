import { useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/button/Button";
import { howYouFoundUs } from "@/constants/contact.jsx";
import PropTypes from 'prop-types';

const ContactForm = ({setIsSuccessful}) => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    websiteURL: "",
    howYouFoundUs: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("https://formspree.io/f/xdknddob", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      setIsSuccessful(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        websiteURL: "",
        howYouFoundUs: "",
        message: "",
      });
    } else {
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  return (
    <form type="form" method="POST">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First name"
          id="firstName"
          name="firstName"
          value={formData?.firstName}
          onChange={handleChange}
          disabled={loading}
          showError={true}
        />
        <Input
          label="Last name"
          id="lastName"
          name="lastName"
          value={formData?.lastName}
          disabled={loading}
          onChange={handleChange}
          showError={true}
        />
      </div>
      <Input
        label="Email"
        id="email"
        variant="mt-4"
        name="email"
        value={formData?.email}
        disabled={loading}
        onChange={handleChange}
        showError={true}
      />
      <Input
        label="Company name"
        id="companyName"
        name="companyName"
        disabled={loading}
        variant="mt-4"
        value={formData?.companyName}
        onChange={handleChange}
        showError={true}
      />
      <Input
        label="Website URL"
        id="websiteURL"
        name="websiteURL"
        variant="mt-4"
        value={formData?.websiteURL}
        disabled={loading}
        onChange={handleChange}
        showError={true}
      />
      <Dropdown
        type="select"
        id="howYouFoundUs"
        name="howYouFoundUs"
        label="How did you find us?"
        options={howYouFoundUs}
        height="h-fit"
        variant="mt-4"
        showError={true}
        disabled={loading}
        selected={formData.howYouFoundUs}
        onSelect={(data) => {
          setFormData({ ...formData, howYouFoundUs: data.value });
        }}
      />
      <TextArea
        placeholder="Message"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={6}
        disabled={loading}
        showError={true}
        variant="mt-4 mb-2"
      />
      <Button
        type="submit"
        theme="primary"
        btnText={loading ? "Sending message..." : "Contact sales"}
        loading={loading}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ContactForm;
ContactForm.propTypes = {
    setIsSuccessful: PropTypes.func,
};