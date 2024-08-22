import React, { useState } from "react";
import Card from "@/components/card/Card";
import { resources } from "@/constants/contact";
import ContactForm from "@/components/contactForm/ContactForm";
import Success from "../components/success/Success";
import '../assets/scss/pages/_contact.scss'

const Contact = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)

  return (
    <main className="font-pptelegraph_r overflow-x-hidden">
        {
          isSuccessful ? <Success/> :
          <section className="hero-container">
            <div>
              <p className="title">Contact Sales</p>
              <p className="description">
                Send us a message and we’ll promptly get back to you.
              </p>
            </div>
            <ContactForm setIsSuccessful={setIsSuccessful}/>
          </section>
        }
      <section className="resource-container">
        <div className="container">
          <p className="heading">
            Helpful resources
          </p>
          <p className="description">
            Find helpful tools, tips, and materials from our community, help
            center, and docs.
          </p>
        </div>
        <div className='card-container'>
          {
            resources.map((resource) =>
              <Card 
                key={resource.title}
                title={resource.title}
                icon={resource.icon}
                variant={resource.variant}
                description={resource.description}
              />
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Contact;
