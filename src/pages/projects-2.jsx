import { useState } from 'react';

import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ProjectsGrid from "@components/ProjectsGrid";
import CallToActionSection from "@components/sections/CallToAction";

import { getSortedProjectsData } from "@library/projects";

import Link from "next/link";

const Projects2 = (props) => {
  return (
    <Layouts
    rightPanelBackground={"/img/person/me.jpg"}
    rightPanelImg={"/img/person/me.png"}
    >
      <PageBanner pageTitle={"Designing a <br>Better World Today"} breadTitle={"Portfolio"} align={"center"} />

      <ProjectsGrid projects={props.projects} columns={2} />
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Projects2;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}