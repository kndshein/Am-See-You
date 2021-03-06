import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import MediaList from "../components/MediaList";

const AllMovies = ({ moviesOnly }) => {
  const rawMediaList = [
    { type: "movie", id: "1771-captain-america-the-first-avenger" },
    {
      type: "tv",
      id: "61550-marvel-s-agent-carter",
      season: 1,
      epiStart: 1,
      epiEnd: 8,
    },
    {
      type: "tv",
      id: "61550-marvel-s-agent-carter",
      season: 2,
      epiStart: 1,
      epiEnd: 10,
    },
    { type: "movie", id: "211387-marvel-one-shot-agent-carter" },
    { type: "movie", id: "299537-captain-marvel" },
    { type: "movie", id: "1726-iron-man" },
    { type: "movie", id: "10138-iron-man-2" },
    { type: "movie", id: "1724-the-incredible-hulk" },
    { type: "movie", id: "76122-marvel-one-shot-the-consultant" },
    {
      type: "movie",
      id: "76535-marvel-one-shot-a-funny-thing-happened-on-the-way-to-thor-s-hammer",
    },
    { type: "movie", id: "10195-thor" },
    { type: "movie", id: "24428-the-avengers" },
    { type: "movie", id: "119569-marvel-one-shot-item-47" },
    { type: "movie", id: "68721-iron-man-3" },
    { type: "movie", id: "253980-marvel-one-shot-all-hail-the-king" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 1,
      epiStart: 1,
      epiEnd: 7,
    },
    { type: "movie", id: "76338-thor-the-dark-world" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 1,
      epiStart: 8,
      epiEnd: 16,
    },
    { type: "movie", id: "100402-captain-america-the-winter-soldier" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 1,
      epiStart: 17,
      epiEnd: 22,
    },
    { type: "movie", id: "118340-guardians-of-the-galaxy" },
    { type: "movie", id: "283995-guardians-of-the-galaxy-2" },
    {
      type: "tv",
      id: "61889-daredevil",
      season: 1,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 2,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "38472-marvel-s-jessica-jones",
      season: 1,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 2,
      epiStart: 11,
      epiEnd: 19,
    },
    { type: "movie", id: "99861-avengers-age-of-ultron" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 2,
      epiStart: 20,
      epiEnd: 22,
    },
    {
      type: "tv",
      id: "61889-daredevil",
      season: 2,
      epiStart: 1,
      epiEnd: 4,
    },
    {
      type: "tv",
      id: "62126-marvel-s-luke-cage",
      season: 1,
      epiStart: 1,
      epiEnd: 4,
    },
    {
      type: "tv",
      id: "61889-daredevil",
      season: 2,
      epiStart: 5,
      epiEnd: 11,
    },
    {
      type: "tv",
      id: "62126-marvel-s-luke-cage",
      season: 1,
      epiStart: 5,
      epiEnd: 8,
    },
    {
      type: "tv",
      id: "61889-daredevil",
      season: 2,
      epiStart: 12,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "62126-marvel-s-luke-cage",
      season: 1,
      epiStart: 9,
      epiEnd: 13,
    },
    { type: "movie", id: "102899-ant-man" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 3,
      epiStart: 1,
      epiEnd: 19,
    },
    {
      type: "tv",
      id: "62127-marvel-s-iron-fist",
      season: 1,
      epiStart: 1,
      epiEnd: 13,
    },
    { type: "movie", id: "271110-captain-america-civil-war" },
    { type: "movie", id: "497698-black-widow" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 3,
      epiStart: 20,
      epiEnd: 22,
    },
    {
      type: "tv",
      id: "62285-marvel-s-the-defenders",
      season: 1,
      epiStart: 1,
      epiEnd: 8,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 4,
      epiStart: 1,
      epiEnd: 6,
    },
    { type: "movie", id: "284052-doctor-strange" },
    { type: "movie", id: "284054-black-panther" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 4,
      epiStart: 7,
      epiEnd: 8,
    },
    {
      type: "tv",
      id: "69088-agents-of-s-h-i-e-l-d-slingshot",
      season: 1,
      epiStart: 1,
      epiEnd: 6,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 4,
      epiStart: 9,
      epiEnd: 22,
    },
    { type: "movie", id: "315635-spider-man-homecoming" },
    { type: "movie", id: "413279-team-thor" },
    { type: "movie", id: "441829-team-thor-part-2" },
    { type: "movie", id: "284053-thor-ragnarok" },
    { type: "movie", id: "505945-team-darryl" },
    {
      type: "tv",
      id: "68716-marvel-s-inhumans",
      season: 1,
      epiStart: 1,
      epiEnd: 8,
    },
    {
      type: "tv",
      id: "67178-marvel-s-the-punisher",
      season: 1,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "67466-marvel-s-runaways",
      season: 1,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 5,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "38472-marvel-s-jessica-jones",
      season: 2,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 5,
      epiStart: 11,
      epiEnd: 18,
    },
    {
      type: "tv",
      id: "66190-marvel-s-cloak-and-dagger",
      season: 1,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "66190-marvel-s-cloak-and-dagger",
      season: 2,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "62126-marvel-s-luke-cage",
      season: 2,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "62127-marvel-s-iron-fist",
      season: 2,
      epiStart: 1,
      epiEnd: 10,
    },
    {
      type: "tv",
      id: "61889-daredevil",
      season: 3,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "67466-marvel-s-runaways",
      season: 2,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "67178-marvel-s-the-punisher",
      season: 2,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "38472-marvel-s-jessica-jones",
      season: 3,
      epiStart: 1,
      epiEnd: 13,
    },
    { type: "movie", id: "363088-ant-man-and-the-wasp" },
    { type: "movie", id: "299536-avengers-infinity-war" },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 5,
      epiStart: 19,
      epiEnd: 22,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 6,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "1403-marvel-s-agents-of-s-h-i-e-l-d",
      season: 7,
      epiStart: 1,
      epiEnd: 13,
    },
    {
      type: "tv",
      id: "67466-marvel-s-runaways",
      season: 3,
      epiStart: 1,
      epiEnd: 10,
    },
    { type: "movie", id: "299534-avengers-endgame" },
    {
      type: "tv",
      id: "84958-loki",
      season: 1,
      epiStart: 1,
      epiEnd: 6,
    },
    {
      type: "tv",
      id: "85271-wandavision",
      season: 1,
      epiStart: 1,
      epiEnd: 9,
    },
    {
      type: "tv",
      id: "88396-falcon-winter-soldier",
      season: 1,
      epiStart: 1,
      epiEnd: 6,
    },
    { type: "movie", id: "429617-spider-man-far-from-home" },
  ];

  const mediaListRef = useRef(null);
  const handleLeft = () => {
    mediaListRef.current.scrollLeft -= 800;
  };

  const handleRight = () => {
    mediaListRef.current.scrollLeft += 800;
  };

  return (
    <div className="all-movies">
      <div className="arrow-left" onClick={() => handleLeft()}>
        <MdKeyboardArrowLeft />
      </div>

      <MediaList
        rawMediaList={rawMediaList}
        moviesOnly={moviesOnly}
        mediaListRef={mediaListRef}
      />
      <div className="arrow-right" onClick={() => handleRight()}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default AllMovies;
