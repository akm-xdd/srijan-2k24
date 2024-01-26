import logo1 from '../assets/logos/1.svg';
import logo2 from '../assets/logos/2.svg';
import logo3 from '../assets/logos/3.svg';
import logo4 from '../assets/logos/4.svg';
import logo5 from '../assets/logos/5.svg';
import logo6 from '../assets/logos/6.svg';
import logo7 from '../assets/logos/7.svg';

export default function Sponsors() {


    return (
        <div className="border-4 border-yellow-400 h-fit m-8 p-4 box-border">
            <div className='border-4 border-pink-400 h-fit m-8 p-4 overflow-hidden flex flex-row'>


                    <div className='animate-slide whitespace-nowrap'>
                        <img src={logo1} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo2} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo3} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo4} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo5} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo6} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo7} className="w-1/6 m-4 inline" alt="" />
                    </div>


                    <div className='animate-slide whitespace-nowrap'>
                        <img src={logo1} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo2} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo3} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo4} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo5} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo6} className="w-1/6 m-4 inline" alt="" />
                        <img src={logo7} className="w-1/6 m-4 inline" alt="" />
                    </div>


            </div>
        </div>
      
    )
}