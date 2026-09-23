import React from "react";

import guideImg from "../../assets/images/cocktail.jpg";
import guideImg1 from "../../assets/images/hike.jpg";
import guideImg2 from "../../assets/images/shuttle.jpg";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    imgUrl: guideImg,
    title: "Endless Hiking",
    desc: "Lace up your hiking boots, grab your backpack, and get ready to embrace the tranquility and serenity of the surrounding wilderness.",
  },
  {
    imgUrl: guideImg1,
    title: "Free Cocktails",
    desc: "Sip on refreshing mojitos, savor the sophistication of martinis, or explore unique mixtures that showcase local flavors.",
  },
  {
    imgUrl: guideImg2,
    title: "Free Shuttle",
    desc: "Sit back and relax as our dedicated drivers take care of your transportation needs, from the airport to local attractions.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <ServiceCard item={item} key={index} />
      ))}
    </>
  );
};

export default ServiceList;
