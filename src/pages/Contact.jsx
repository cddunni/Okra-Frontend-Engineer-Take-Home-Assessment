import { useState } from "react";
import Card from "@/components/Card";
import { resources } from "@/constants/contact.jsx";
import ContactForm from "@/components/ContactForm";
import Success from "../components/Success";

const Contact = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)

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
            <ContactForm setIsSuccessful={setIsSuccessful}/>
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
