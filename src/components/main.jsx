import React from "react";
import "./main.css";

import mechahealthinitsketch from "./images/mechahealthinitsketch.png";
import tablet1sketch from "./images/tablet1.png";
import desktop21 from "./images/desktop21.png";
import desktop22 from "./images/desktop22.png";
import tablet21 from "./images/tablet 21.png";
import tablet22 from "./images/tablet 22.png";

import bmhp from "./images/bmhp.png";
import bmf from "./images/bmf.png";
import bmu from "./images/bmu.png";
import bms from "./images/bms.png";
import bms2 from "./images/bms2.png";

import hfhomepage from "./images/hfhome.png";
import hffoldergrid from "./images/hffoldergrid.png";
import hffolderlist from "./images/hffolderlist.png";
import hfsettings from "./images/hfsettings.png";
import hfscan from "./images/hfscan.png";
import hfspot from "./images/hfspot.png";

const Body = () => {
  return (
    <section className="body">
      <h1>Iterative Design and Evaluation</h1>
      <p>
        This project will focus on a startup company and iteratively designing
        an application for their service. The goal of the project is to create a
        practical, clean, user-friendly, and efficient application that meets
        the needs of the users, while also learning about how to design for a
        specific audience, and how to iteratively design and evaluate a product.
      </p>

      <h1>Acknowledgments</h1>
      <p>
        This project was completed by William Park, Jiwon Yoo, Thais Santos, and
        Dylan Lee. While we worked as a team throughout the design process, the
        parts I contributed to the most were the high fidelity prototypes and
        user testing.
      </p>

      <h1>Context, Type of interface, Users impacted</h1>
      <p>
        Our service is Mecha Health, a health tech start-up. Their product aims
        to revolutionize X-ray analysis through AI and automation. They aim to
        redefine how medical imaging is interpreted by reducing the radiology
        reporting process from 1 scan per hour to 1 scan per 5 minutes,
        alleviating burnout and improving care delivery. We are designing a
        desktop web interface tailored for use by radiologists, clinical
        technicians, and potentially patients. The radiologists would be
        impacted as they are the target customers for the application to improve
        their efficiency, as they are currently experiencing burnout and are
        demanding a more efficient and trustworthy tool that allows them to
        quickly review. Such AI-generated draft reports, verifying findings, and
        finalizing the diagnostic process would speed up their process. Clinical
        technicians would also be impacted as they may use the interface to
        upload scans, track report progress, etc. Patients are not direct users,
        but they are indirectly impacted through faster diagnosis turnaround,
        more accurate assessments, and improved treatment timelines. The
        interface must support large image formats, detailed annotation tools,
        and viewing of scans and structured reports to help enhance the
        efficiency of scans for clinicians.
      </p>

      <h1>Sketches</h1>
      <p>
        For initial sketches, before we decided on working on desktop, we
        decided to design for desktop and tablets to give more options to choose
        from.
      </p>

      <h2>Desktop Sketch 1</h2>

      <ul className="li-desc">
        <li>
          Focused on priority: We thought the X-ray itself was the most
          important part, hence made that image big. Also segmented the AI
          diagnosis is segmented to the side to separate the attention, but is
          also easily visible. We put the carousel in the bottom so the users
          can easily see where they are on, without being distracted.{" "}
        </li>
        <li>
          This sketch itself was the final sketch after multiple iterative
          designs.
        </li>
      </ul>

      <img
        src={mechahealthinitsketch}
        width="800"
        className="screenshot"
        alt="logo"
      />

      <h2>Tablet Sketch 1</h2>

      <ul className="li-desc">
        <li>
          Tablet version of the desktop sketch from above. Still maintaining the
          same priority with the large X-ray screen, and other parts being
          minimized (e.g. tap to look further)
        </li>
      </ul>

      <img src={tablet1sketch} width="800" className="screenshot" alt="logo" />

      <h2>Desktop Sketch 2</h2>
      <ul className="li-desc">
        <li>
          Focused on making a simple and clean look for the website,
          highlighting only key functionalities.
        </li>
        <li>
          Large images and icons were used to draw user attention to important
          descriptions and demos and where action is needed (e.g., uploading
          image placeholder)
        </li>
        <li>
          Blocks of text were avoided, favoring images and demos to retain user
          attention.
        </li>
      </ul>

      <img src={desktop21} width="400" className="screenshot" alt="logo" />
      <img src={desktop22} width="400" className="screenshot" alt="logo" />

      <h2>Tablet Sketch 2</h2>
      <ul>
        <li className="li-desc">
          Tablet version of the desktop sketch from above. Still maintaining the
          same priority with large images and minimal text blocks. Components
          were redesigned to fit the screen appropriately (e.g., hamburger
          compressed header).
        </li>
      </ul>

      <img src={tablet21} width="400" className="screenshot" alt="logo" />
      <img src={tablet22} width="400" className="screenshot" alt="logo" />

      <h1>Design Decisions</h1>

      <p>
        Throughout the sketching process, we aimed to optimize clarity, speed,
        and user trust – crucial factors for radiologists working in
        high-pressure environments.
      </p>

      <h2>Homepage</h2>

      <ul className="li-desc">
        <li>
          Establish immediate clarity about Mecha Health’s mission while keeping
          the interface visually clean.
        </li>
        <li>
          This will help users understand what Mecha Health does at a glance and
          build trust through clarity. We also wanted to avoid distraction and
          guide users straight to the service they provide.{" "}
        </li>
      </ul>

      <h2>Folder</h2>

      <ul className="li-desc">
        <li>
          One of our sketches proposed a folder hub to manage scanned files.{" "}
        </li>
        <li>
          We implemented a drag-and-drop functionality and a clear display of
          previously uploaded scans, creating a fluid interaction model between
          review and upload.{" "}
        </li>
        <li>
          This allows users to quickly retrieve past studies and add new ones.{" "}
        </li>
        <li>
          We are considering adding a tick or some sort of a mark that indicates
          what has been reviewed and not to review again, to enhance the
          efficiency of going through a bunch of files.{" "}
        </li>
      </ul>

      <h2>Upload</h2>
      <ul className="li-desc">
        <li>
          Decided to go with a very minimal design, directing user attention to
          a large area to upload x-rays and show progress of the uploaded files.{" "}
        </li>
      </ul>

      <h2>Diagnosis</h2>
      <ul className="li-desc">
        <li>
          As radiologists often face lag time and information overload, we
          focused on speed, simplicity, and efficiency.{" "}
        </li>
        <li>
          Large central X-ray image for clear visibility. The X-ray image is
          also annotated with symptoms that are highlighted to direct the
          radiologist’s attention to. These symptom markers are clickable and
          expand into deeper explanations. You can also hide these symptom bars
          to view the full image without any annotations.{" "}
        </li>
        <li>
          Right sidebar for automatically generated AI diagnosis with easy
          approve/edit options.{" "}
        </li>
        <li>
          Bottom carousel for quick switching between other scan views. Tick
          marks are shown to indicate which scans have been approved with a
          diagnosis.{" "}
        </li>
      </ul>

      <p>
        These design decisions combined are represented in our wireframes using
        Balsamiq below:
      </p>

      <h1>Balsamiq Wireframes</h1>
      <p>
        Initial low-fidelity wireframes were made in Balsamiq to begin exploring
        the flow and feel of the application more concretely.
      </p>

      <h2>Homepage</h2>
      <img src={bmhp} width="400" className="screenshot" alt="logo" />

      <h2>Interactive Homepage Sketch in Rive</h2>
      <iframe
        style={{ border: "none" }}
        width="1024"
        height="768"
        src="https://rive.app/s/18Lfs3F0zEqPbQ60pFXnsQ/embed?runtime=rive-renderer"
        allowfullscreen
        allow="autoplay"
      ></iframe>

      <h2>Folder Page</h2>
      <img src={bmf} width="400" className="screenshot" alt="logo" />

      <h2>Upload Page</h2>
      <img src={bmu} width="400" className="screenshot" alt="logo" />

      <h2>Scan Page</h2>
      <img src={bms} width="400" className="screenshot" alt="logo" />

      <h2>Scan Page Expanded Window</h2>
      <img src={bms2} width="400" className="screenshot" alt="logo" />

      <h2>Demo Video and Discussion</h2>
      <a
        href="https://www.loom.com/share/811b2f89d858426dbbdb9c2c0f818821?sid=2086878b-5e82-4f05-b8da-2d31e5eb9fc3"
        target="_blank"
      >
        https://www.loom.com/share/811b2f89d858426dbbdb9c2c0f818821?sid=2086878b-5e82-4f05-b8da-2d31e5eb9fc3
      </a>

      <h1>Critique</h1>
      <ul className="li-desc">
        <li>Add some profile/login for folder access. </li>
        <li>Thumbnails for carousels. </li>
        <li>
          Indicate completion status of images with some other ui component.{" "}
        </li>
        <li>More clarity with edit/approve function. </li>
        <li>Include marker for active image. </li>
        <li>Arrows for carousel to make more intuitive. </li>
        <li>Prototype interactions for most important components. </li>
      </ul>

      <h1>Design Changes</h1>
      <ul className="li-desc">
        <li>
          Profile/Login: We incorporated a profile icon throughout the entire
          app, which was previously missing. This addition helps ground the
          user’s navigation experience and supports personalization.
        </li>
        <li>
          Edit/Approve Function: We removed this feature after realizing it
          aligned with a different service model. While MechaHealth does support
          this functionality, it didn’t align with the specific user flow we
          wanted to highlight.{" "}
        </li>
        <li>
          Carousel Navigation: We included arrows for the carousel as suggested
          in the critique, which made scrolling more intuitive, and made further
          intuitive by switching to a vertical layout, which better fits our
          content structure.
        </li>
        <li>
          Interaction with Components: We added more interactive elements
          throughout the interface to create a more engaging and responsive
          experience, aligning with the feedback to increase interactivity.{" "}
        </li>
        <li>
          Information Reduction: We added icons and color coordinated in places
          to make functionalities intuitive, reducing the amount of information
          needed to be shown, supporting a better user experience. Expandable
          and collapsable tabs were added in the scans page to further reduce
          immediate information shown, drawing user attention to certain
          prioritized figures.
        </li>
        <li>
          Color Scheme: We also refined our design for the service by
          implementing a centralized theme across all pages. This includes a
          consistent color palette (navy blue, white, gray) and a chrome
          tab-style design, which helped unify the app visually.
        </li>
      </ul>

      <h2>Homepage</h2>
      <img src={hfhomepage} width="800" className="screenshot" alt="logo" />

      <h2>Folder, grid view</h2>
      <img src={hffoldergrid} width="800" className="screenshot" alt="logo" />

      <h2>Folder, list view</h2>
      <img src={hffolderlist} width="800" className="screenshot" alt="logo" />

      <h2>Settings page</h2>
      <img src={hfsettings} width="800" className="screenshot" alt="logo" />

      <h2>Scan page, report and spot analaysis</h2>
      <img src={hfscan} width="800" className="screenshot" alt="logo" />

      <h2>Scan page, spot analysis</h2>
      <img src={hfspot} width="800" className="screenshot" alt="logo" />

      <h2>Demo Video and Discussion</h2>
      <a href="https://www.loom.com/share/e3301348cce2463d953b2f950e0a3f19?sid=a522c66f-8e86-411d-b97a-e3d6e16fcb8c">
        https://www.loom.com/share/e3301348cce2463d953b2f950e0a3f19?sid=a522c66f-8e86-411d-b97a-e3d6e16fcb8c
      </a>

      <h2>Figma Prototype</h2>
      <a href="https://www.figma.com/design/4IUXrHO1lsUBFQBXD6qF8d/Iterative-Design-Hifi?node-id=0-1&t=LK9aBsMlr0yr4GBZ-1">
        {" "}
        https://www.figma.com/design/4IUXrHO1lsUBFQBXD6qF8d/Iterative-Design-Hifi?node-id=0-1&t=LK9aBsMlr0yr4GBZ-1
      </a>

      <h1>User Testing</h1>
      <p>
        An overarching task we want users to complete on our interactive
        prototype is to open a spot analysis on the scan and identify the
        automated summary diagnosis. This task requires users to understand the
        different features the service provides, and forms a necessary part of
        the core workflow of the app.
      </p>

      <h2>User Testing Observations</h2>
      <ul className="li-desc">
        <li>
          Users navigated to a scan through the recent scans section on the main
          page.{" "}
        </li>
        <li>Users did not switch between the display modes of the scans. </li>
        <li>Users clicked the nodes first to show the analysis. </li>
        <li>
          Users opened the Summary tab after reading the spot analysis section.{" "}
        </li>
        <li>
          Users navigated to the folder last, navigating through the scan
          carousel mainly.{" "}
        </li>
      </ul>

      <h2>User Responses</h2>

      <b className="left">
        What was the first thing you did when you saw the UI?
      </b>
      <ul className="li-desc">
        <li>I saw the recent tab and folder tabs at the top of the screen. </li>
        <li>I scrolled in the recent files tab. </li>
      </ul>
      <b className="left">
        Were there any times you were confused about what a particular button or
        element did?
      </b>
      <ul className="li-desc">
        <li>
          No. I think all of them were intuitive and reacted as I expected them
          to.{" "}
        </li>
        <li>No. </li>
      </ul>
      <b className="left">
        Are there any changes you would make to the application for first-time
        users?
      </b>
      <ul className="li-desc">
        <li>Home page tutorial, some info, or title. </li>
        <li>Way to categorize/sort scans. </li>
      </ul>
      <b className="left">
        Are there any elements that you found particularly unhelpful?
      </b>
      <ul className="li-desc">
        <li>
          No. Besides the elements I couldn’t click, I found most of the buttons
          to be useful. But, if I had to choose one, it would be the button that
          changes the displays. But I definitely see how it could be useful.
        </li>
        <li>No. </li>
      </ul>

      <h1>Interview Reflection</h1>
      <p>
        Users interacted similarly with the application, following the same and
        most efficient steps to achieve the overarching goal set for them. This
        indicates that the application is streamlined and directs user attention
        in a consistent and meaningful way. One key observation was that users
        clicked on the nodes on the scan before opening the summary section. The
        main feature of the service is to provide an AI diagnosis/summary of the
        scan to improve radiologists' efficiency, but we found that users did
        not view this diagnosis/summary immediately. An improvement to make in
        the future would be to display the summary initially instead of having
        users manually open it, ensuring that the main functionality of the
        application is first interacted with.
      </p>
    </section>
  );
};

export default Body;
