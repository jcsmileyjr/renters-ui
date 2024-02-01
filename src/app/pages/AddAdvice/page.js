"use client"
import { useRouter } from 'next/navigation';
import {useState} from 'react';
import AddAdviceButton from '@/components/AddAdviceButton/addAdviceButton';
import Image from 'next/image';
import SunIcon from '../../../images/sun-icon-yellow-1.png';
import grayPlusIcon from '../../../images/plus-icon-gray.png';

export default function AddAdvice () {
    const router = useRouter() //  Use to relocate user to another page
    const [content, setContent] = useState("");

    const createAdvice = () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'advice': content, 'likes' : 1})
        }

        fetch('http://localhost:8080/createAdvice', requestOptions);        
        router.push('/');
    }
    return (
        <main className="px-4 m-2 flex flex-col items-center">
            <Image className="absolute -top-32 -left-32 -z-10" priority={false} src={SunIcon} width={250} alt="" />
            <h1 className="text-3xl font-bold text-brown text-center">First Time Renter's Checklist</h1>
            <h2 className="text-xl font-bold text-brown text-center mt-8 underline">Share a First Time Renters Advice</h2>
            
            <textarea className='bg-paleYellow border border-brown border-solid rounded w-1/2 mt-8 p-4' value={content} onChange={(e) => setContent(e.target.value)} />
        
            <button onClick={() => createAdvice()} className='bg-paleYellow text-mediumGray border border-brown border-solid rounded mt-8 sm:mb-0 p-2 flex justify-center items-center gap-2'>
                <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page." />
                <p>Add Rental Tip</p>
            </button>
        </main>
    )
}