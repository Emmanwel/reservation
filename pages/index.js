import Home from "../components/Home";
import Layout from "../components/layout/Layout.js";
import Dd from "../components/Dd";
import { getRooms } from "../redux/actions/roomActions";

import Gallery from "../components/layout/Gallery";

import { wrapper } from "../redux/store";
//import EntireSection from "../components/Exray/EntireSection";
//import ReaF from "../components/Foot/ReaF";
import ServiceSection from "../components/TestMode/ServiceSection";
import TopSection from "../components/layout/TopSection";

export default function Index() {
  return (
    <Layout>
      <Dd />
      <Home />
      <ServiceSection />

      <TopSection />
      <Gallery />
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
