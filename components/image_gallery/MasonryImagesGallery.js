import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import styles from "../../styles/Hometop.module.css";

const MasonryImagesGallery = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            // A plain <img> (not next/image): masonry needs each photo's
            // own natural aspect ratio to pack the columns, and
            // react-responsive-masonry's columns are `flex: 1; width: 0`
            // -- next/image's responsive/lazy-load sizing never resolves
            // against a zero-width container, so the image just stays a
            // 1x1 placeholder forever.
            <img
              className={styles.masonry__img}
              src={item.src}
              key={index}
              alt={`Resort gallery photo ${index + 1}`}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryImagesGallery;
