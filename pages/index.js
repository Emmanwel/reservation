import Home from "../components/Home";
import Layout from "../components/layout/Layout.js";

import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";
//import EntireSection from "../components/Exray/EntireSection";
//import ReaF from "../components/Foot/ReaF";
import ServiceSection from "../components/TestMode/ServiceSection";
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
      // export const getServerSideProps = wrapper.getServerSideProps(
      //     async ({ req, query, store }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
