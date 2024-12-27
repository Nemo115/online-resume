import titleCard from "./assets/resume_title.png";
import js from "./assets/javascript.svg";
import c_sharp from "./assets/c_sharp.svg";
import python from "./assets/python.svg";
import c from "./assets/c.svg";
import ts from "./assets/typescript-icon.svg";
import html from "./assets/html-5.svg";
import css from "./assets/css-icon.svg";
import gd from "./assets/godot-icon.svg";
import mysql from "./assets/mysql.svg";
import react from "./assets/react.svg";
import flask from "./assets/icons8-flask.svg";
import xamarin from "./assets/xamarin.svg";
// import azure from "./assets/microsoft-azure.svg";
import aws from "./assets/aws.svg";
import unity from "./assets/unity.svg";
import raylib from "./assets/raylib.svg";
// import uni from "./assets/the-university-of-melbourne-seeklogo-2.svg";
// import wpf from "./assets/wpf.svg";

import "./App.css";

import Card from "./components/Card.tsx";
import SkillSlot from "./components/SkillSlot.tsx";
import SkillList from "./components/SkillList.tsx";
import LinkItem from "./components/LinkItem.tsx";
import Activity from "./components/Activity.tsx";
import Bullet from "./components/Bullet.tsx";

function App() {
  return (
    <>
      <div className="animation_area">
        <ul className="box_area">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="page">
        <img src={titleCard} className="logo" />
        <div className="sheet">
          <div className="card-section">
            <Card>
              <h1>Proficient Languages</h1>
              <SkillList>
                <SkillSlot img_src={c_sharp}>C#</SkillSlot>
                <SkillSlot img_src={python}>Python</SkillSlot>
                <SkillSlot img_src={c}>C</SkillSlot>
                <SkillSlot img_src={js}>JavaScript</SkillSlot>
                <SkillSlot img_src={ts}>TypeScript</SkillSlot>
                <SkillSlot img_src={html}>HTML</SkillSlot>
                <SkillSlot img_src={css}>CSS</SkillSlot>
                <SkillSlot img_src={gd}>GDScript</SkillSlot>
              </SkillList>
            </Card>
            <Card>
              <h1>Technologies</h1>
              <h3>Databases:</h3>
              <SkillList>
                <SkillSlot img_src={mysql}>MySQL</SkillSlot>
              </SkillList>
              <h3>Front-end Web Development:</h3>
              <SkillList>
                <SkillSlot img_src={react}>React</SkillSlot>
              </SkillList>
              <h3>Back-end Web Development:</h3>
              <SkillList>
                <SkillSlot img_src={flask}>Flask</SkillSlot>
              </SkillList>
              <h3>Mobile App Development:</h3>
              <SkillList>
                <SkillSlot img_src={xamarin}>Xamarin</SkillSlot>
              </SkillList>
              <h3>Cloud Services:</h3>
              <SkillList>
                {/* <SkillSlot img_src={azure}>Azure</SkillSlot> */}
                <SkillSlot img_src={aws}>AWS</SkillSlot>
              </SkillList>
              {/* <h3>Desktop App Development:</h3>
              <SkillList>
                <SkillSlot img_src={wpf}>WPF</SkillSlot>
                <SkillSlot img_src={xamarin}>Xamarin</SkillSlot>
              </SkillList> */}
              <h3>Game Development:</h3>
              <SkillList>
                <SkillSlot img_src={unity}>Unity</SkillSlot>
                <SkillSlot img_src={gd}>Godot</SkillSlot>
                <SkillSlot img_src={raylib}>Raylib</SkillSlot>
              </SkillList>
            </Card>
            <Card>
              <h1>Education</h1>
              {/* <SkillList>
            <SkillSlot img_src={uni}>
              University of Melbourne: Bachelor of Science
              <ul>
                <li>Majoring in Data Science</li>
                <li>WAM: 76.571</li>
                <li>(Expected to complete in 2026)</li>
              </ul>
            </SkillSlot> f
          </SkillList> */}
              <Activity title="University of Melbourne, Bachelor of Science">
                <Bullet>Majoring in Data Science</Bullet>
                <Bullet>WAM: 76.571</Bullet>
                <Bullet>
                  Coursework: Programming in Python and C, Computer Algorithms,
                  Linear Algebra, Calculus
                </Bullet>
                <Bullet>(Expected to complete in 2026)</Bullet>
              </Activity>
            </Card>
            <Card>
              <h1>Other Skills</h1>
              <h4>Image Editing (Photoshop, Gimp)</h4>
              <h4>3D Modelling (Blender)</h4>
              <h4>Music Production (FL Studio)</h4>
              <h4>Pixel Art (Aseprite)</h4>
            </Card>
            <Card>
              <h1>Contact</h1>
              <h3>Email: leo.zhen331@gmail.com</h3>
              <h3>Phone: +61 0421 408 803</h3>
            </Card>
          </div>

          <div className="card-section">
            <Card>
              <h1>Projects</h1>

              <h2>Web Development:</h2>

              <Activity
                title="Club Voting System"
                link="https://github.com/Nemo115/ClubVoteSystem"
              >
                <Bullet>
                  Web Application voting system for holding more efficient
                  university club elections. Create an election or register a
                  vote, with algorithmic support for preferential voting.
                </Bullet>
                <Bullet>
                  Full Stack Application built and deployed in 3 days as a
                  Hackathon Entry.
                </Bullet>
                <Bullet>
                  Made with: React, Flask, JavaScript, Python, MySQL
                </Bullet>
              </Activity>
              <Activity
                title="Private Business Management System"
                link="https://github.com/Nemo115/One-Touch-Computers"
              >
                <Bullet>
                  Web Application for managing day to day business operations
                  such as recording orders, managing clients, and tracking
                  expenses.
                </Bullet>
                <Bullet>Made with: Flask, Python, MySQL</Bullet>
              </Activity>

              <h2>Desktop Development:</h2>
              <Activity
                title="Development Timer"
                link="https://github.com/Nemo115/Dev_Timer"
              >
                <Bullet>
                  A desktop widget to keep track of development and coding time.
                  Can also be used for other tasks.
                </Bullet>
                <Bullet>Made with: Godot, GDScript</Bullet>
              </Activity>
              <Activity
                title="Classroom Relationship Manager App"
                link="https://github.com/Nemo115/Classroom-Relationship-Manager"
              >
                <Bullet>
                  A Management application for teachers to use in the classroom
                  to assign groups and assess their students in different
                  qualities through collected data.
                </Bullet>
                <Bullet>Full API Support for teachers and students</Bullet>
                <Bullet>Made with: ttkbootstrap, Python</Bullet>
                <Bullet>Hackathon Entry</Bullet>
              </Activity>
              <Activity
                title="Wallpaper Changer"
                link="https://github.com/Nemo115/WallpaperChanger"
              >
                <Bullet>
                  A Desktop application allowing the user to bypass any
                  customization restrictions on a Windows machine and change
                  their wallpaper.
                </Bullet>
                <Bullet>Made with: Raylib, C</Bullet>
              </Activity>
              <h2>Mobile Development:</h2>
              <Activity
                title="Social Media App Prototype"
                link="https://github.com/Nemo115/Prototype111"
              >
                <Bullet>
                  A prototype social media mobile app like Instagram, Facebook
                  and Reddit, where users can make posts and input upvotes and
                  downvotes, as well as likes and dislikes for each post.
                </Bullet>
                <Bullet>Made with: Xamarin, C#, Azure</Bullet>
              </Activity>
              <Activity
                title="Restaurant Booker App Prototype"
                link="https://github.com/Nemo115/Restaurant_Booker_App"
              >
                <Bullet>
                  A prototype mobile app for customers to book a table by
                  viewing a graphical map of the restaurant.
                </Bullet>
                <Bullet>Made with: Xamarin, C#</Bullet>
              </Activity>
            </Card>
            <Card>
              <h1>Volunteering / Experience</h1>
              <Activity title="EcoTexo Internship">
                <Bullet>
                  Joined a contracting AI development team to build chatbots for
                  battery companies. Improving their customer service systems.
                </Bullet>
                <Bullet>Using GPT4o, AWS, postgreSQL</Bullet>
              </Activity>
              <Activity title="UniMelb Game Makers club, Production Division">
                <Bullet>
                  Collaborating with teams to program games for the University
                  of Melbourne Game Makers Club.
                </Bullet>
                <Bullet>Using Unity Engine and GitHub</Bullet>
              </Activity>
              <Activity
                title="Hobbyist Indie Game Developer"
                link="https://skeleton-disco.itch.io"
              ></Activity>
            </Card>
            <Card>
              <h1>Awards / Achievements</h1>
              <h2>Hackathons:</h2>
              <ul className="achievements_list">
                <LinkItem link="https://devpost.com/software/beekeep?ref_content=my-projects-tab&ref_feature=my_projects">
                  CISSA x MAC StartHack 2024
                </LinkItem>
                <LinkItem link="https://devpost.com/software/cvs?ref_content=my-projects-tab&ref_feature=my_projects">
                  Codebrew 2024
                </LinkItem>
              </ul>
              <h2>Game Jams:</h2>
              <ul className="achievements_list">
                <LinkItem link="https://skeleton-disco.itch.io/iceberg-fishing">
                  SoloDevelopment jam #6: Winter Jam (2024)
                </LinkItem>
                <LinkItem link="https://skeleton-disco.itch.io/spacebar-blackjack">
                  1-Button Jam 2024
                </LinkItem>
                <LinkItem link="https://skeleton-disco.itch.io/desert-bus-cosmic-horrorcomedy">
                  Desert Bus for Hope 2024 Game Jam
                </LinkItem>
                <LinkItem link="https://skeleton-disco.itch.io/finishing-the-trail-hike">
                  Leafy Jam (2024)
                </LinkItem>
              </ul>
              <h2>Academic Awards:</h2>
              <h4>Subject Prize for VCE Software Development (2023)</h4>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
