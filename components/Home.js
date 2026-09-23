import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Pagination from "react-js-pagination";

import RoomItem from "./room/RoomItem";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../redux/actions/roomActions";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } =
    useSelector((state) => state.allRooms);

  let { location, page = 1 } = router.query;
  page = Number(page);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const handlePagination = (pageNumber) => {
    if (location) {
      let url = window.location.search;

      url.includes("&page")
        ? (url = url.replace(/(page=)[^\&]+/, "$1" + pageNumber))
        : (url = url.concat(`&page=${pageNumber}`));

      router.push(url);
    } else {
      router.push(`/?page=${pageNumber}`);
    }
  };

  let count = roomsCount;
  if (location) {
    count = filteredRoomsCount;
  }

  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-2 stays-heading">
          {location ? `Rooms in ${location}` : "All rooms"}
        </h2>
        <Link href="/search">
          <a className="back-to-search d-inline-block mb-4">
            <i className="fa fa-arrow-left"></i> Refine your search
          </a>
        </Link>
        <div className="row">
          {!rooms || rooms.length === 0 ? (
            <div className="alert alert-light border w-100 text-center py-5">
              <b>No rooms match your search.</b>
              <p className="mb-0 mt-2 text-muted">
                Try a different location or clear your filters.
              </p>
            </div>
          ) : (
            rooms.map((room) => <RoomItem key={room._id} room={room} />)
          )}
        </div>
      </section>

      {resPerPage < count && (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={count}
            onChange={handlePagination}
            nextPageText={"Next"}
            prevPageText={"Prev"}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </div>
      )}
    </>
  );
};

export default Home;
