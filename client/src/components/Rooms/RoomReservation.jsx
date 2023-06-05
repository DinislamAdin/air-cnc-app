import React, { useContext, useState } from 'react';
import Calender from '../Rooms/Calender'
import Button from '../Button/Button';
import { AuthContext } from '../../providers/AuthProvider';
// import BookingModal from '../Modal/BookingModal';
import { formatDistance, subDays } from 'date-fns'

const RoomReservation = ({roomData}) => {
    const {user, role} =useContext(AuthContext);

    const totalPrice = formatDistance(
        new Date(roomData.to),
         new Date(roomData.from)
         )

    const [bookingInfo, setBookingInfo] =useState({
        guest:{name: user.displayName, email:user.email, image: user.photoURL},
        host: roomData.host.email

    })
    return (
        <div className='bg-white border-[1px] border-neutral-200 overflow-hidden'>
            <div className='flex flex-row gap-1 p-4'>
                <div className="text-2xl font-semibold">$ 200</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center"><Calender></Calender></div>
            <hr />
            <div className="p-4">
                <Button  disabled={roomData.host.email === user?.email} label={'Reserve'}></Button>
            </div>
            <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
                <div>Total</div>
                <div>$ 300</div>

            </div>
            {/* <BookingModal /> */}
        </div>
    );
};

export default RoomReservation;