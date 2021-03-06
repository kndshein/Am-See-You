import React, { useState } from "react";

import Movie from "./Movie";
import Show from "./Show";

const SingleMedia = ({ moviesOnly, rawMediaList, mediaListRef }) => {
  const [toggleState, setToggleState] = useState(null);

  const handleClick = (index) => {
    setToggleState({ active: index });
    if (toggleState?.active === index) {
      setToggleState({ active: null });
    }
  };

  const handleKey = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(index);
    }
  };

  if (moviesOnly) {
    rawMediaList.filter((type) => type.type !== "tv");
  }

  return (
    <>
      {rawMediaList.map((element, index) => {
        return (
          <>
            {element.type === "movie" ? (
              <Movie
                key={index}
                rawMovieData={element}
                toggleState={toggleState}
                handleClick={handleClick}
                handleKey={handleKey}
                index={index}
                mediaListRef={mediaListRef}
              />
            ) : (
              !moviesOnly && (
                <Show
                  key={index}
                  rawShowData={element}
                  toggleState={toggleState}
                  handleClick={handleClick}
                  handleKey={handleKey}
                  index={index}
                />
              )
            )}
          </>
        );
      })}
      <div id="empty-margin"></div>;
    </>
  );
};

export default SingleMedia;
