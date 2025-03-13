import Layouts from "@layouts/Layouts";

import { getSortedPostsData } from "@library/posts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const Story = (props) => {
  return (
    <Layouts
    rightPanelBackground={"/img/person/me.jpg"}
    rightPanelImg={"/img/person/me.jpg"}
    >
      <PageBanner pageTitle={"Success Story"} />

      {/* story */}
      <section>
        <div className="row">
          <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
              <div className="mil-divider"></div>
              <h3>Education:</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
              <div className="mil-timeline-track"></div>
              <ul>
                <li className="mil-up">
                  <div className="mil-item-head mil-mb-5">
                    <h4>Second Year of Bachelor's Degree</h4>
                    <div className="mil-text-sm">2020 - 2021</div>
                  </div>
                  <p className="mil-text-sm mil-mb-15">Student</p>
                  <p>
                    As a student in the Second Year of Bachelor's Degree in
                    Experimental Science from 2020 to 2021, I engaged in
                    exploring the fascinating realms of scientific
                    experimentation.
                  </p>
                </li>
                <li className="mil-up">
                  <div className="mil-item-head mil-mb-5">
                    <h4>Technical Specialist in Digital Development</h4>
                    <div className="mil-text-sm">2021 - 2023</div>
                  </div>
                  <p className="mil-text-sm mil-mb-15">Student</p>
                  <p>
                    Embarking on a journey as a Technical Specialist in Digital
                    Development at the Institut Spécialisé de Technologie
                    Appliquée NTIC, I am immersed in the dynamic world of
                    Information and Communication Technologies (ICT). This
                    educational phase, spanning from 2021 to 2023, allows me to
                    acquire specialized skills and insights into the rapidly
                    evolving digital landscape.
                  </p>
                </li>

                <li className="mil-up">
                  <div className="mil-item-head mil-mb-5">
                    <h4>Institut Supérieur du Génie Appliqué (IGA)</h4>
                    <div className="mil-text-sm">2023 - 2024</div>
                  </div>
                  <p className="mil-text-sm mil-mb-15">Student</p>
                  <p>
                    Anticipating the next chapter in my educational journey, I
                    am excited to pursue a Licence Professionnelle in Computer
                    Software Engineering at Institut Supérieur du Génie Appliqué
                    (IGA). This program, scheduled from October 2023 to June
                    2024, promises to deepen my expertise in the field and
                    prepare me for professional challenges in computer software
                    engineering.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
              <div className="mil-divider"></div>
              <h3>Work:</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
              <div className="mil-timeline-track"></div>
              <ul>
                <li className="mil-up">
                  <div className="mil-item-head mil-mb-5">
                    <h4>Laravel Developer</h4>
                    <div className="mil-text-sm">2 months</div>
                  </div>
                  <p className="mil-text-sm mil-mb-15">
                    Status: Current Position
                  </p>
                  <p>
                    Previously, I worked as a Laravel Developer, managing
                    various operations on a full-time basis. In this role, I
                    successfully utilized skills in PHP, PhpMyAdmin, JavaScript,
                    Laravel, HTML5, jQuery, AJAX, and Bootstrap. The experience,
                    gained during a two-month period from April 2023 to May 2023
                    in Casablanca-Settat, Morocco, provided me with valuable
                    hands-on exposure in the field.
                  </p>
                </li>

                <li className="mil-up">
                  <div className="mil-item-head mil-mb-5">
                    <h4>Java Developer</h4>
                    <div className="mil-text-sm">
                      5 months
                    </div>
                  </div>
                  <p className="mil-text-sm mil-mb-15">
                    Current Freelance Position (5 months and ongoing)
                  </p>
                  <p>
                    As a Java Developer at Coding Tech on a freelance basis, I
                    have been actively engaged in diverse projects for the past
                    five months, starting from August 2023. My responsibilities
                    involve leveraging my skills in Java Development, Spring
                    Framework, Java, PostgreSQL, Spring Data, Spring Security,
                    Spring MVC, Spring Boot, and Unified Modeling Language
                    (UML). This remote position, based in Morocco, has provided
                    me with continuous opportunities to enhance my expertise in
                    the dynamic field of Java development.
                  </p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* story end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Story;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
