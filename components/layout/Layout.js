import React from "react";
import Head from "next/head";

import Header from "./Header";
import ReaF from "../Foot/ReaF";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  children,
  title = "Book Best Resorts for your Holiday",
  description = "Discover and reserve beautifully appointed rooms and resorts, from city stays to coastal escapes.",
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ToastContainer position="bottom-right" theme="colored" />
      <main>{children}</main>
      <ReaF />
    </div>
  );
};

export default Layout;
