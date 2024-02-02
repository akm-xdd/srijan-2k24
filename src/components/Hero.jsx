import Background from '../assets/background.mp4';
import Countdown from './Countdown';
// import Logo from '../assets/Logo.png';
import "./Hero.css";
const eventDate = new Date('2024-02-29');

export default function Hero() {
  return (
    <>
      <div className="relative">
        <video src={Background} autoPlay loop muted className="min-w-full min-h-screen z-[-1] object-cover brightness-[20%]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          <h1 className='font-dreamland xl:text-[200px] lg:text-[150px] md:text-[100px] sm:text-[75px] text-[75px] text-center text-white'>SRIJAN '24</h1> 
          <Countdown targetDate={eventDate} />
        </div>
      </div>
    </>
  );
}