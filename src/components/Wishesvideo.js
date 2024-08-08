import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./styles.css"; // Ensure you have this CSS file in the src directory

const BirthdayVideo = () => {
  const videoUrl =
    "https://drive.google.com/file/d/1TRCidNt2a1inpxFDPxIg59EUSizARJ5J/preview";

    const videoUrl1 = 
    "https://drive.google.com/file/d/1UtojPxSicQhlyCHQPfevB8fP3ul_0QDS/preview";
  useEffect(() => {
    emailjs.init("TemSz5cC3VMXtzamM"); // Replace with your EmailJS user ID

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
      <div className="video-wrapper">
        <iframe
          src={videoUrl}
          className="video-player"
          allow="autoplay"
          title="Google Drive Video"
        />
      </div>
      <br></br>
      <p>Second video</p>
      <br></br>
      <div className="video-wrapper">
        <iframe
          src={videoUrl1}
          className="video-player"
          allow="autoplay"
          title="Google Drive Video"
        />
      </div>
    </div>
  );
};

export default BirthdayVideo;
