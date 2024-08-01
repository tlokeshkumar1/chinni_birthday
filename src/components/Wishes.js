import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css"; // Ensure you have this CSS file in the src directory

const Wishes = () => {
  useEffect(() => {
    emailjs.init("segsdhdsh"); // Replace with your EmailJS user ID

    const sendNotification = () => {
      emailjs
        .send("service_4140sar", "template_38nvl1a", {
          to_email: "lokeshkumartelagamalla@gmail.com", // Replace with your email address
        })
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((error) => {
          console.error("FAILED...", error);
        });
    };

    sendNotification();
  }, []);

  return (
    <div className="container">
      <img src="cake.jpg" alt="Birthday Cake" className="cake" />
      <h1>Happy Happy Happyyyyyyyy Birthday, Priyanka !!! 🩷🎂🥳</h1>
      <p>
        On your special day, I want to wish you a life filled with happiness,
        good health, and the fulfillment of all your dreams and goals. You have
        always been someone with clear visions and big aspirations, and I have
        no doubt that you will achieve everything you set your mind to.
      </p>
      <p>
        Nka chepali antey, we should definitely create many more memories
        together. Whether it's exploring new places or watching the latest
        movies, we must make the most of our time whenever we meet. These
        moments are precious, and I look forward to each one of them.
      </p>
      <p>
        Just remember to always be yourself, stay happy, and live life to the
        fullest. You deserve all the best that life has to offer.
      </p>
      <p>
        Once again, Happy Birthday, Priyanka! May this year bring you endless
        joy and success.
      </p>
      <p>With Best wishes,</p>
      <p>Lokesh</p>
    </div>
  );
};

export default Wishes;
