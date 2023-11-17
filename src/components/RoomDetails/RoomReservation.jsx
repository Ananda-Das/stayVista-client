/* eslint-disable react/prop-types */
import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation = ({ room }) => {
  //price calculation
  const totalDays = parseInt(formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]);
  const totalPrice = parseFloat(totalDays) * (room?.price);
  
  return (
    <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
      <div className="flex items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {room?.price}</div>
        <dvi className="font-light text-neutral-600">night</dvi>
      </div>
      <hr />
      <div className="flex justify-center">
        <Calender></Calender>
      </div>
      <hr />
      <div className="p-4">
        <Button label={'Reserve'}></Button>
      </div>
      <hr />
      <div className="p-4 flex items-center justify-between font-semibold text-lg">
        <div>Total</div>
        <div>$ {totalPrice}</div>

      </div>
    </div>
  );
};

export default RoomReservation;
