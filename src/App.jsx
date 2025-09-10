
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Parv Setia</h1>
        <ul className="nav-links">
          <li><a href="https://www.linkedin.com/in/parv-setia-4533b6280/">About</a></li>
          <li><a href="https://github.com/parvgg">Projects</a></li>
          <li><a href="mailto:parv21042005setia@gmail.com">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<header className="hero">
  <div className="hero-content">
    <img src="/favicon.jpg" alt="Parv Setia" className="profile-pic" />
    <div>
      <h2>Hi, I'm <span>Parv Setia</span></h2>
      <p>CSE Student | Data Analytics & Machine Learning Enthusiast | Problem Solver</p>
      <div className="buttons">
        <a href="#contact" className="btn">Get in Touch</a>
        <a href="/resume.pdf" className="btn" download>Download Resume</a>
      </div>
    </div>
  </div>
</header>



      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          👋 Hi, I’m Parv Setia

I’m a Computer Science Engineering student at Bharati Vidyapeeth College of Engineering with a keen interest in Data Analytics, Machine Learning, and Algorithmic Problem-Solving.<br></br> I love exploring how data and intelligent systems can be used to solve real-world challenges.<br>

</br>

My skills and expertise include:<br></br>

Data Structures & Algorithms (DSA) for efficient problem-solving<br></br>

Supervised & Unsupervised Machine Learning for predictive modeling and insights<br></br>

Object-Oriented Programming (OOPs) for scalable software design<br></br>

Excel for data analysis and business reporting<br></br>

Python & SQL for data processing and manipulation<br></br>

Data Visualization (Matplotlib, Seaborn, Power BI) for turning data into stories<br></br>

Web Development Fundamentals (HTML, CSS, JavaScript) for building user-friendly interfaces<br></br>

Version Control (Git/GitHub) for collaborative development<br></br>

I’m constantly learning and working on projects that bring together my interests in data, algorithms, and technology, with the goal of building impactful solutions. 🚀
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <a href="https://github.com/parvgg/spacewars" target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>Space_Wars</h3>
            <p>A DBMS facilitated game made using the pygame and the sqlite3 libraries of python.</p>
          </a>

          <a href="https://github.com/parvgg/detection" target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>Object Detection</h3>
            <p>This model is a Python script using the Tkinter library to create a GUI application for object detection using the YOLOv5 model.</p>
          </a>

          <a href="https://github.com/parvgg/excel-salary-dashboard" target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>Excel Salary Dashboard</h3>
            <p>This data jobs salary dashboard was created to help job seekers investigate salaries for their desired jobs and ensure they are being adequately compensated.

The data contains detailed information on job titles, salaries, locations, and essential skills that are presented here.</p>
          </a>
          <a href="https://github.com/parvgg/data_jobs_salary_analysis" target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>Data Jobs Salary Analysis</h3>
            <p>As a former job seeker, I’ve always been surprised by the lack of data exploring the most optimal jobs and skills in the data science market. I set out to understand what skills top employers request and how to land more pay.</p>
          </a>
          <a href="https://razorinfotech.com/" target="_blank" rel="noopener noreferrer" className="project-card">
            <h3>Internship Experience</h3>
            <p>As a Web Development Intern at Razor Infotech, I applied hands-on frontend development skills to enhance their website. This opportunity deepened my knowledge of responsive design, modern web technologies, and best practices for delivering clean, user-friendly interfaces.</p>
          </a>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="contact">
  <h2>Contact Me</h2>
  
  <p>
    Email:{" "}
    <a 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=parv21042005setia@gmail.com" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      parv21042005setia@gmail.com
    </a>
  </p>

  <p>
    LinkedIn:{" "}
    <a 
      href="https://www.linkedin.com/in/parv-setia-4533b6280/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Visit Profile
    </a>
  </p>

  <p>
    GitHub:{" "}
    <a 
      href="https://github.com/parvgg" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      github.com/parvgg
    </a>
  </p>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Parv Setia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

