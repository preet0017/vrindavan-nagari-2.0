import React from 'react'
import Container from '../common/Container'

const CurrentEvent = () => {
  return (
    <>
    <Container className="h-screen bg-blue-300">
        <div>
            <h1 className="text-4xl font-bold mb-4 text-center relative top-10 text-amber-300">
                Upcoming Events
            </h1>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-4 text-center relative top-14 text-white">
                Navratri 2026
            </h2>
        </div>
        <div>
            <div className="w-full h-16 flex justify-around">
                <h2 className="text-lg font-medium mb-4 relative top-20 text-white">
                   <p className='text-2xl '> Vrindavan Nagri  </p><br/>
                    <p>Sat 10 Oct 2026 - Tue 20 Oct 2026</p>
                    <p>9:00 PM</p>
                    <p>5 Hours</p>
                    <p>All age groups</p>
                    <p>Gujarati</p>
                    <p>Shubh Farm: Ahmedabad</p>
                </h2>
                <h2 className=" text-lg font-medium mb-4 relative top-20 text-white">
                    <p className='text-2xl'>About this Event</p><br/>
                    <p>
                        <p>10/10 Pre Shivam Barot</p>
                        <p>11/10 Rupal ba dabhi</p>
                        <p>12/10 Neha suthar</p>
                        <p>13/10 Khushbu Asodiya</p>
                        <p>14/10 Kaushik Bharwad</p>
                        <p>15/10 Himali vyas</p>
                        <p>16/10 Shivam Barot</p>
                        <p>17/10 Rushbh Ahir</p>
                        <p>18/10 Aghori muzik</p>
                        <p>19/10 Rishikesh Gadhvi</p>
                        <p>20/10 Aghori Muzik</p>
                    </p>
                </h2>
            </div>
        </div>
    </Container>
    </>
  )
}

export default CurrentEvent