import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Unimanaginable travel tour van with comfy seats. dont miss a chance to be part of the transformation",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "lifetime beer with nearly twenty years of preservation",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
