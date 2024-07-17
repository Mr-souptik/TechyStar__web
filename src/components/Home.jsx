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
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sequi facilis, rem quis ducimus sit saepe commodi necessitatibus assumenda, laboriosam, porro tempora nisi amet accusantium placeat atque! Obcaecati, fuga consectetur?
  Quaerat soluta quasi sapiente dolore officia pariatur odio culpa aliquam vero laboriosam repudiandae numquam officiis consectetur illo ratione esse possimus placeat, quos quisquam quam hic vitae quibusdam sequi dicta? Eligendi.
  Quas ut deleniti officia praesentium similique. Accusantium in consectetur nisi quibusdam eligendi quo esse soluta! Similique porro distinctio tempora dignissimos quis! Aspernatur quibusdam a sapiente magnam ea nemo harum atque!
  Ipsum sint eum nobis a quas ullam quae, saepe nesciunt est unde? Id velit consequuntur error ex hic expedita libero quas voluptas nisi, reprehenderit quisquam repellendus suscipit itaque eaque consequatur?
  Aspernatur quas maiores unde perferendis optio est eligendi? Perspiciatis, tempore fugiat cum corrupti placeat, delectus corporis cupiditate ducimus nisi iure veniam praesentium rem qui, deleniti minus quis? Aliquam, impedit quod?</p>
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