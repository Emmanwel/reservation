import React from "react";
import { Link } from "next/link";
import Hero from "./Hero";
import Banner from "./Banner";

export default function App() {
  return (
    <Hero>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link href="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
}
