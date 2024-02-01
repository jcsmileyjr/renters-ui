"use client"
import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';
import { useRouter } from 'next/navigation'

// Component that allows the user open the AddTip page.
export default function AddAdviceButton() {
    const router = useRouter() //  Use to relocate user to another page
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='font-bold text-2xl text-brown mb-4 underline sm:hidden'>Rental Advice</h2>
            <button onClick={() => router.push('/pages/AddAdvice') } className='bg-paleYellow text-mediumGray border border-brown border-solid rounded mb-6 sm:mb-0 sm:w-1/3 p-2 flex justify-center items-center gap-2'>
                <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page." />
                <p>Add Rental Tip</p>
            </button>
        </div>
    )
}