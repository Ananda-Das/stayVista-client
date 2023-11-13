import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("./rooms.json")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  return (
    <div className="grid grid-cols-4 gap-3">
      {rooms.map((room) => (
        <Card key={room._id} room={room}></Card>
      ))}
    </div>
  );
};

export default Rooms;
