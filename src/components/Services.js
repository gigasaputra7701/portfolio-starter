<<<<<<< HEAD
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec massa ut orci posuere tempor ornare ut turpis. Morbi erat lorem, consectetur id libero eu, consequat vulputate mauris. Nunc molestie. ",
    link: "Learn more",
  },
  {
    name: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec massa ut orci posuere tempor ornare ut turpis. Morbi erat lorem, consectetur id libero eu, consequat vulputate mauris. Nunc molestie. ",
    link: "Learn more",
  },
  {
    name: "Freelancer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec massa ut orci posuere tempor ornare ut turpis. Morbi erat lorem, consectetur id libero eu, consequat vulputate mauris. Nunc molestie. ",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[456px] mb-16">
              I am a Front-end Developer and UI/UX Design with approximately one
              year of experience.
            </h3>
            <button className="btn btn-sm">see my work</button>
          </motion.div>
          {/* service list */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div class="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className="text-gradient text-sm">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
=======
import React from 'react';

const Services = () => {
  return <div className='section' id='service'>Services</div>;
};

export default Services;
>>>>>>> b46ae381a675a77b8aea66fdb5c63c1752006863
