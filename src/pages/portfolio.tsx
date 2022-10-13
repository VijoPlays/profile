/** @format */

//TODO: Show all projects, filter by language

import React from "react";
import LanguageList from "../components/languageList";
import ProjectList from "../components/projectList";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>Portfolio</h1>
      <LanguageList />
      <ProjectList />
    </div>
  );
}
