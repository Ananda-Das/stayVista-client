import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

const RoomDetails = () => {
  const [room, setRoom] = useState({});

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://raw.githubusercontent.com/shakilahmedatik/stayVista-starter-template/main/client/public/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader></Loader>;

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <Header roomData={room}></Header>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-4">
          <RoomInfo roomData={room}></RoomInfo>
          {/* Calender */}
          <div className="md:col-span-3 order-first md:order-last mb-10">
            {/* Room Reservation */}
            <RoomReservation room={room}></RoomReservation>
          </div>
        </div>
        {/* <div className="">calender</div> */}
      </div>
    </Container>
  );
};

export default RoomDetails;
