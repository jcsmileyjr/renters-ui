"use client"
import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';
import {useState} from 'react';

// Component that allows the user add a new advice.
export default function AddAdviceButton({newAdvice}) {
    const [flipUI, setFlipUI] = useState(false);
    const [content, setContent] = useState("");

    const getAdvice = () => {
        if(content === "") {
            setFlipUI(false);
            return;
        } else {
            newAdvice(content);
            setFlipUI(false);
            setContent("");
        }
    }

    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            {!flipUI &&
                <>
                    <h2 className='font-bold text-2xl text-brown mb-4 underline sm:hidden'>Rental Advice</h2>
                    <button onClick={() => setFlipUI(true)} className='bg-paleYellow text-mediumGray border border-brown border-solid rounded mb-6 sm:mb-0 sm:w-1/3 p-2 flex justify-center items-center gap-2'>
                        <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page." />
                        <p>Add Rental Tip</p>
                    </button>                
                </>
            }
            {flipUI &&
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl font-bold text-brown text-center underline">Share a First Time Renters Advice</h2>
                    <textarea className='bg-paleYellow border border-brown border-solid rounded w-full min-h-40 mt-8 p-4' value={content} onChange={(e) => setContent(e.target.value)} />
        
                    <button onClick={() => getAdvice()} className='bg-paleYellow text-mediumGray border border-brown border-solid rounded mt-8 sm:mb-0 p-2 flex justify-center items-center gap-2'>
                        <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page." />
                        <p>Add Rental Tip</p>
                    </button>
                </div>
            }
        </div>
    )
}