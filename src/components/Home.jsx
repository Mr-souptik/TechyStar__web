import React from 'react';
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle
  ,AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";

const Home = () => {
    return (

      <>
      <div className="home" id="home">
       <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
      </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics"/>

        <div>
        <p>we are your one and only solution to the teche problems you face everyday we are leading Tech company whose aim is to increase the problem solving ability in children.
        </p>
        </div>
      </div>
      <div className="home3" id="about">
<div>
  <h1>Who we are?</h1>
  <p>TechyStar Web is an interactive website designed to help users understand and resolve development queries efficiently. This platform offers a user-friendly interface where developers can search for solutions, ask questions, and find detailed explanations for various programming-related issues.</p>
</div>
      </div>
      
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;