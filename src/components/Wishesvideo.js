import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css"; // Ensure you have this CSS file in the src directory

const BirthdayVideo = () => {
  useEffect(() => {
    emailjs.init("segsdhdsh"); // Replace with your EmailJS user ID

    const sendNotification = () => {
      emailjs
        .send("service_i24qjlm", "template_leo0679", {
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
      <p>Chinni kosam chinni video</p>
      <video controls>
        <source src="/path_to_your_birthday_wish_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BirthdayVideo;
