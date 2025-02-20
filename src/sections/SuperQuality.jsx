import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          ⚽ Our Story – Passion,{" "}
          <span className="text-coral-red">Teamwork,</span> Excellence
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Founded in Umuahia, Abia State, New Generation Soccer FC is more than
          just a football club—it’s a movement dedicated to nurturing talent,
          fostering teamwork, and competing at the highest level. With a squad
          of passionate players and experienced coaches, we strive for
          excellence both on and off the pitch. Our mission is to develop future
          stars while uniting the community through the love of football.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Join us on this journey as we train, compete, and inspire the next
          generation of champions! 🔥🏆
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={400}
          // height={522}
          className="object-contain rounded-2xl"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
