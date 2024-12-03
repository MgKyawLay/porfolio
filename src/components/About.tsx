"use client";
import { initScrollReveal } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveal([
      {
        element: sectionRef.current,
        animation: { duration: 3000, origin: "left", distance: "500px" },
      },
    ]);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 20px",
        backgroundColor: "#f9f9f9",
        backgroundImage: "url(/us.jpg)", // Add the background image
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the image
      }}
      className="min-h-screen flex flex-col "
    >
      <h2 className="text-4xl font-semibold text-white custom-text-shadow-black">About Us</h2>
      <p className="mt-4 text-lg max-w-3xl text-white custom-text-shadow-black">
        We are a dedicated team of developers, designers, and problem-solvers, passionate about creating innovative and high-quality digital solutions. 
        Our mission is to deliver exceptional mobile apps, websites, and backend systems that empower businesses to thrive in the digital world.
      </p>
      
      <div className="mt-8 max-w-4xl">
        <h3 className="text-2xl font-semibold text-white custom-text-shadow-black">Our Approach</h3>
        <p className="mt-4 text-lg text-white custom-text-shadow-black">
          At our core, we focus on understanding our clients' unique needs and crafting tailored solutions that not only meet but exceed expectations. 
          We use cutting-edge technologies, agile development processes, and a collaborative approach to ensure every project is delivered on time and with the highest quality standards.
        </p>
      </div>
      
      <div className="mt-8 max-w-4xl">
        <h3 className="text-2xl font-semibold text-white custom-text-shadow-black">Our Values</h3>
        <ul className="mt-4 text-lg text-white list-disc list-inside custom-text-shadow-black">
          <li><strong>Innovation</strong>: We constantly strive to innovate and stay ahead of industry trends.</li>
          <li><strong>Quality</strong>: We are committed to delivering products that are reliable, performant, and user-friendly.</li>
          <li><strong>Collaboration</strong>: We believe in working closely with our clients to achieve mutual success.</li>
          <li><strong>Integrity</strong>: We operate with honesty, transparency, and a focus on building long-term relationships.</li>
        </ul>
      </div>
    </section>
  );
}
