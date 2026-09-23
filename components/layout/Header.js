import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/userActions";
import { signOut } from "next-auth/client";

const navLinks = [
  { path: "/", display: "Home" },
  { path: "/search", display: "Find a Room" },
];

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { user, loading } = useSelector((state) => state.loadedUser);

  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [dispatch, user]);

  // Close menus whenever the route changes
  useEffect(() => {
    const close = () => {
      setMenuOpen(false);
      setUserMenuOpen(false);
    };
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  // Close the user dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const logoutHandler = () => {
    setUserMenuOpen(false);
    signOut();
  };

  return (
    <nav className="site-nav sticky-top">
      <div className="container site-nav__inner">
        <Link href="/">
          <a className="site-nav__brand">
            <img src="/images/bookit_logo.png" alt="Resorts Reservation" />
          </a>
        </Link>

        <div className="site-nav__links d-none d-md-flex">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.path}>
              <a
                className={
                  "site-nav__link" +
                  (router.pathname === link.path ? " site-nav__link--active" : "")
                }
              >
                {link.display}
              </a>
            </Link>
          ))}
        </div>

        <div className="site-nav__actions">
          {user ? (
            <div className="user-menu" ref={userMenuRef}>
              <button
                type="button"
                className="user-menu__trigger"
                onClick={() => setUserMenuOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={userMenuOpen}
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={(user.avatar && user.avatar.url) || "/images/default_avatar.jpg"}
                    alt={user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span className="d-none d-lg-inline">{user.name}</span>
                <i className="fa fa-angle-down ml-1" aria-hidden="true"></i>
              </button>

              {userMenuOpen && (
                <div className="user-menu__dropdown">
                  {user.role === "admin" && (
                    <>
                      <Link href="/admin/rooms">
                        <a className="user-menu__item">Rooms</a>
                      </Link>
                      <Link href="/admin/bookings">
                        <a className="user-menu__item">Bookings</a>
                      </Link>
                      <Link href="/admin/users">
                        <a className="user-menu__item">Users</a>
                      </Link>
                      <Link href="/admin/reviews">
                        <a className="user-menu__item">Reviews</a>
                      </Link>
                      <hr className="user-menu__divider" />
                    </>
                  )}

                  <Link href="/bookings/me">
                    <a className="user-menu__item">My Bookings</a>
                  </Link>

                  <Link href="/me/update">
                    <a className="user-menu__item">Profile</a>
                  </Link>

                  <button
                    type="button"
                    className="user-menu__item user-menu__item--danger"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <a className="btn login-header-btn text-white d-none d-sm-inline-block">
                  Login
                </a>
              </Link>
            )
          )}

          <button
            type="button"
            className="mobile-menu-btn d-md-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu d-md-none">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.path}>
              <a className="mobile-menu__link">{link.display}</a>
            </Link>
          ))}

          {!user && !loading && (
            <Link href="/login">
              <a className="mobile-menu__link mobile-menu__link--cta">Login</a>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
