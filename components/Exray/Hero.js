import React from "react";

export function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
