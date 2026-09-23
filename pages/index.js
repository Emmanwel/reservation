import Home from "../components/Home";
import Layout from "../components/layout/Layout.js";

import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";
import TopSection from "../components/layout/TopSection";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Pictures from "../components/Pictures";

export default function Index() {
  return (
    <Layout>
      <Hero />

      <Home />

      <Experience />

      <TopSection />

      <Pictures />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
