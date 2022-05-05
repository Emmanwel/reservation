import React from "react";
import styles from "../styles/Dd.module.css";
import Link from "next/link";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Dd() {
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer container-fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <MDBNavbarItem active></MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        id={styles.intro}
        className="img-fluid hover-shadow container-xxl p-5 text-center h-2000 w-auto"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/standard/city/047.webp')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1>Make Every Night Count…Twice</h1>
              <h1 className="mb-3">Explore our Best Resorts</h1>

              <Link href="/search">
                <a
                  className="btn btn-outline-light btn-lg m-2"
                  role="button"
                  rel="nofollow"
                >
                  Explore Nearby
                </a>
              </Link>
              <Link href="/register">
                <a className="btn btn-outline-light btn-lg m-2" role="button">
                  Join Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
