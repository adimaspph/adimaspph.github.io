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

        <h6 class="project-heading-2">Requirement Gathering and Wireframe</h6>
        <p class="project-description">
            The first thing we do is meet with our client to define the requirement. After that, we create a activity diagram and site map for every feature, also low fidelity design for every page. 
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/lofi_design.jpg" alt="Brives Lo-Fi Design">
            <figcaption class="py-2 text-center text-sm italic">Brives Low Fidelity Design</figcaption>
        </div>
        <h6 class="project-heading-2">Design</h6>
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

        <h6 class="project-heading-2">Backend Development</h6>
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

        <h6 class="project-heading-2">Backend Development</h6>
        <p class="project-description">
            For the backend part, we first create data modelling with JPA, spring boot ORM (Object Relational Mapping) so we don't need to write the SQL syntax on backend. We separated the backend into several folders for easy maintenance and development.
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/backend_folder.jpg" alt="Brive Backend Folder">
            <figcaption class="py-2 text-center text-sm italic">Brive Backend Folder</figcaption>
        </div>
        <p class="project-description">
            Model folder for data modeling, repository folder for connecting backend to the database, rest folder for API template, restcontroller for API controller, security for handling authentication and authorization (we use JWT, JSON Web Token for security), and service for data and logic processing.
        </p>
        <p class="project-description">
            To manage API, we use Postman API tools. But that tools need to subscribe to create team. And then, we use Swagger API tools to manage and test API from the backend.
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/brives_swagger.jpg" alt="Swagger API tools on Brives">
            <figcaption class="py-2 text-center text-sm italic">Swagger API tools on Brives</figcaption>
        </div>

        <h6 class="project-heading-2">Frontend Development</h6>
        <p class="project-description">
            As technical lead, I create base components so my team can use the component repeatedly. The components include buttons, navigation bars, sidebars, forms, colors class, typography, notification, and others.
        </p>
        <div class="project-img">
            <img src="../assets/projectBrives/frontend_component.jpg" alt="Brives Component">
            <figcaption class="py-2 text-center text-sm italic">Brives Component</figcaption>
        </div>
        <p class="project-description">
            
        </p>
    </section>
</template>