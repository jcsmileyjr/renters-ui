import Image from 'next/image';
import BrownThumbsUp from '../../images/thumbs-up-brown-icon.png';
import SunIcon from '../../images/sun-icon-yellow-1.png';

const AdviceContainer = ({content}) => {
    return (
        <div className="flex justify-center items-center mt-10 first:mt-0 sm:first:mt-10">
            <div className='sm:w-1/2'>
                <div className='flex'>
                    <p className='text-mediumGray pr-2'><span className='text-brown font-bold mr-2'>Advice:</span>{content.advice}</p>
                    <div className=''>
                        <Image priority={false} src={BrownThumbsUp} width={30} alt="Thumbs up icon, when click, update number of likes by one." />
                        <p className='text-center text-brown'>Likes</p>
                        <p className='text-center text-brown'>{content.likes}</p>
                    </div>
                </div>
                <div className='flex justify-between mt-2'>
                    {[...Array(10)].map((icon,index) => {
                        return <Image priority={false} key={`sun-icon-${index}`} src={SunIcon} width={25} alt="" />
                    })

                    }
                </div>
            </div>
         </div>
    )
}

// Component that displays advice and its number of likes from an object array. 
export default function Advice ({list}) {
    return (
        <div className="">
            {
                list.map((content, index) => {
                    return <AdviceContainer key={content.id} content={content}/>
                })
            }
        </div>
    )
}