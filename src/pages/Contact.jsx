import { useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Dropdown from "@/components/Dropdown";
import Button from "@/components/button/Button";
import Card from "@/components/Card";
import { howYouFoundUs } from "@/constants/contact.jsx";
import BookOpen from '@/assets/icons/book-open.svg?react';
import Book from '@/assets/icons/book.svg?react';
import Slack from '@/assets/icons/slack.svg?react';
import Success from "../components/Success";

const Contact = () => {
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
  const [loading, setLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const response = await fetch('https://formspree.io/f/xdknddob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false)
      setIsSuccessful(true)
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
      setLoading(false)
      alert('Something went wrong.');
    }
  };

  return (
    <main className="font-pptelegraph_r overflow-x-hidden">
        {
          isSuccessful ? <Success/> :
          <section className="bg-on_primary lg:px-[395px] md:px-20 px-6 lg:py-[186px] md:py-32 py-28 md:grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl md:text-[50px] lg:text-7xl md:leading-[60px] lg:leading-[80px] text-primary">Contact Sales</p>
              <p className="md:mt-4 my-3 text-secondary md:text-xl text-base md:leading-8 leading-6 lg:max-w-[309px]">
                Send us a message and we’ll promptly get back to you.
              </p>
            </div>
            <form type='form' method="POST">
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
                id='howYouFoundUs'
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
              <Button type='submit' theme="primary" btnText={loading ?  'Sending message...' : 'Contact sales'} loading={loading} onClick={handleSubmit}/>
            </form>
          </section>
        }
      <section className="bg-secondary_action lg:px-[395px] md:px-20 px-6 md:py-32 py-20">
        <div className="max-w-[395px]">
          <p className="text-primary text-3xl md:text-[50px] lg:text-[56px] md:leading-[64px] leading-[48px]">
            Helpful resources
          </p>
          <p className="text-secondary md:mt-3 mt-2 md:text-base text-sm">
            Find helpful tools, tips, and materials from our community, help
            center, and docs.
          </p>
        </div>
        <div className='mt-10 md:mt-20 grid md:grid-flow-col gap-4'>
            <Card 
              title='See Brinte docs'
              icon={<BookOpen/>}
              variant='bg-purple_400 row-span-2 hover:bg-purple_500'
              description='Brinte docs'
            />
             <Card 
              title='Join Slack community'
              icon={<Slack/>}
              variant='bg-orange_400 hover:bg-orange_500'
              description='Brinte community'
            />
             <Card 
              title='Go to help center'
              icon={<Book/>}
              variant='bg-on_primary hover:bg-tertiary_dim'
              description='Brinte support'
            />
        </div>
      </section>
    </main>
  );
};

export default Contact;
