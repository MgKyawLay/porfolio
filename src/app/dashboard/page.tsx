import React from "react";
import { Input } from "@/components/ui/input";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
    </main>
  );
};

export default Dashboard;
