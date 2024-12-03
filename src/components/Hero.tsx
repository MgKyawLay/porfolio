"use client";
import { initScrollReveal } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    initScrollReveal([
      {
        element: sectionRef.current,
        animation: { duration: 2000, origin: "top", distance: "200px" },
      },
    ]);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        textAlign: "center",
        padding: "50px 0",
        minHeight: "100vh",
        backgroundImage: "url(/laptop.jpg)", // Add the background image
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the image
      }}
      className="min-h-screen flex justify-center items-center flex-col text-border:white"
    >
      <h1 className="text-3xl font-bold custom-text-shadow-white">All in One Solution for your Works</h1>
      <p className="mt-4 text-lg max-w-2xl mx-auto custom-text-shadow-white">
        We specialize in building <strong>mobile apps</strong> that provide
        seamless user experiences,
        <strong>frontend development</strong> to create engaging and responsive
        websites, and <strong>backend solutions</strong> that power your web
        applications with robust performance and security. Whether you're
        looking to build your next app, improve your website's user interface,
        or scale your backend systems, we are here to help!
      </p>
    </section>
  );
}
