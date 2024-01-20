import Image from 'next/image';
import BrownThumbsUp from '../../images/thumbs-up-brown-icon.png';
import SunIcon from '../../images/sun-icon-yellow-1.png';

const AdviceContainer = () => {
    return (
        <div className="w-1/2">
            <div className='flex'>
                <p className='text-mediumGray'><span className='text-brown font-bold'>Advice:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className=''>
                    <Image priority={false} src={BrownThumbsUp} width={75} alt="Thumbs up icon, when click, update number of likes by one." />
                    <p className='text-center text-brown'>Like</p>
                    <p className='text-center text-brown'>1</p>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                {[...Array(10)].map((icon,index) => {
                    return <Image priority={false} key={`sun-icon-${index}`} src={SunIcon} width={25} alt="" />
                })

                }
            </div>
         </div>
    )
}

// Component that displays advice and its number of likes from an object array. 
export default function Advice () {
    return (
        <div className="flex justify-center items-center mt-8">
            <AdviceContainer />
            {/* <AdviceContainer />
            <AdviceContainer />
            <AdviceContainer /> */}
        </div>
    )
}