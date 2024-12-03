"use client";
import { initScrollReveal } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveal([
      {
        element: sectionRef.current,
        animation: { duration: 3000, origin: "right", distance: "500px" },
      },
    ]);
  }, []);

  const projects = [
    {
      title: "Voucher Management System",
      description: "Voucher management system for Lawkanat Thingan House",
      image: "/dash1.png",
      link: "https://yourprojectlink1.com",
    },
    {
      title: "Upcoming Applications",
      description: "Upcoming applications",
      image: "/laptop.jpg",
      link: "https://yourprojectlink1.com",
    },
    {
      title: "Upcoming Applications",
      description: "Upcoming applications",
      image: "/laptop.jpg",
      link: "https://yourprojectlink1.com",
    },

  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
      className="min-h-screen flex flex-col items-center"
    >
      <h2 className="text-4xl font-semibold text-black">Our Projects</h2>
      <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
        Here are some of the amazing websites and apps we’ve built for our clients. Explore them to see the kind of work we do!
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg"
            /> */}
            <Image
              src={project.image}
              alt={project.title}
              width={100}
              height={100}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-black">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            {/* <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:text-blue-700"
            >
              View Project
            </a> */}
          </div>
        ))}
      </div>
    </section>
  );
}
