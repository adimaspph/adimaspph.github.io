<template>
    <section class="project-page">
        <router-link to="/#project" class="text-sm hover:text-primary transition-all"><svg viewBox="0 0 24 24" focusable="false" class="w-4 inline-block m-auto fill-current"><path  d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>Back to Project</router-link>

        <h2 class="mt-4 project-title">BRIVES, Online Private Tutoring Booking Website</h2>
        <div class="project-img">
            <img src="../assets/project_brives.png" alt="Brives Poster">
            <figcaption class="py-2 text-center text-sm italic">BRIVES Website Project</figcaption>
        </div>
        
        <h5 class="project-heading">Description</h5>
        <p class="project-description">Brives is an information system created to meet the needs of students to be able to book private classes online. In addition, this system can also help staff to manage schedules. The project started at the beginning of late February to meet the graduation requirements for the information systems development project course and must be completed in early June.</p>
        <h5 class="project-heading">Goal</h5>
        <p class="project-description">
            The main goal of this project is to create an online private tutoring booking system with scrum method. This system is expected to have a simple design and functionality according to the client's request.
        </p>
        <h5 class="project-heading">Role and Responsibility</h5>
        <p class="project-description">
            In a team of 5 members, I was chosen to be the technical leader. As a technical lead, I have responsibility for managing the defining the framework, building the database, and managing the deployment. I and my friends share work equally but for coding, I take the complex part.
        </p>

        <h5 class="project-heading">Process Flow</h5>

        <p class="project-description">
            The first thing we do is meet with our client to define the requirement. After that, we create a activity diagram and site map for every feature, also low fidelity design for every page. 
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/lofi_design.jpg" alt="Brives Lo-Fi Design">
            <figcaption class="py-2 text-center text-sm italic">Brives Low Fidelity Design</figcaption>
        </div>
        <p class="project-description">
            After the client accepts our low-fidelity design, we create a design system consisting of color palettes, typography, and components like button, navbar, footer, form, and other. For color palettes, we make it similar to the BTA Group main website.
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/design_system.jpg" alt="Design System">
            <figcaption class="py-2 text-center text-sm italic">Brives Design System</figcaption>
        </div>
        <p class="project-description">
            After that, we divided task for every team member. I got a section for the private class booking page and schedule management page because its little complex. Every member of the team makes their high-fidelity design for their page based on the design system previously created.
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/booking_class_hifi.jpg" alt="Booking Class High Fidelity">
            <figcaption class="py-2 text-center text-sm italic">Class Booking High Fidelity</figcaption>
        </div>
        <div class="project-img">
            <img src="../assets/projectBrives/schedule_management_hifi.jpg" alt="Schedule Management High Fidelity">
            <figcaption class="py-2 text-center text-sm italic">Schedule Management High Fidelity</figcaption>
        </div>
        <p class="project-description">
            We decided to use ReactJS as frontend, Spring Boot as backend, and MySQL for databases because we already learn that framework in other course subject we want implement third tier application with API as the communication bridge. Before we code backend, we create a class diagrams and database schemas to make modeling databases easier to build. 
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/class_diagram.jpg" alt="Brives Class Diagram">
            <figcaption class="py-2 text-center text-sm italic">Brives Class Diagram</figcaption>
        </div>
        <div class="project-img">
            <img src="../assets/projectBrives/database_schema.jpg" alt="Brive Database Schemas">
            <figcaption class="py-2 text-center text-sm italic">Brive Database Schemas</figcaption>
        </div>
        <p class="project-description">
            For the backend part, we first create data modelling with JPA, spring boot ORM (Object Relational Mapping) so we don't need to write the SQL syntax on backend. 
        </p>
    </section>
</template>