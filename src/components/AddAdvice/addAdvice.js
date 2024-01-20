import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';

export default function AddAdvice() {
    return (
        <div className='flex justify-center items-center mt-8'>
            <button className='text-mediumGray border-2 border-brown border-solid rounded w-1/3 p-2 flex justify-center items-center gap-2'>
                <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page" />
                <p>Add Rental Tip</p>
            </button>
        </div>
    )
}