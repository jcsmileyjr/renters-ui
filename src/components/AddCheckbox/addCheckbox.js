"use client"
import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';
import {useState} from 'react';


export default function AddCheckbox ({newCheckListItem}) {
    const [flipUI, setFlipUI] = useState(false);
    const [content, setContent] = useState("");

    const getContent = () => {
        if(content === "") {
            setFlipUI(false);
            return;
        } else {
            newCheckListItem(content);
            setFlipUI(false);
            setContent("");
        }
    }
    return (
        <div className="flex justify-center items-center mt-4">
            {!flipUI &&
                <button onClick={() => setFlipUI(true)} className='bg-paleYellow text-mediumGray border border-brown border-solid rounded w-2/5 md:w-2/6 lg:w-2/4 p-1 flex justify-center items-center gap-2'>
                    <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add item to Checklist page." />
                    <p>Add Item</p>
                </button>
            }
            {flipUI &&
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl font-bold text-brown text-center underline">Add an item to the checklist above</h2>
                    <textarea className='bg-paleYellow border border-brown border-solid rounded w-full min-h-40 mt-8 p-4' value={content} onChange={(e) => setContent(e.target.value)} />

                    <button onClick={() => getContent()} className='bg-paleYellow text-mediumGray border border-brown border-solid rounded mt-8 sm:mb-0 p-2 flex justify-center items-center gap-2'>
                        <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add rental tip page." />
                        <p>Add Checklist Item</p>
                    </button>
                </div>
            }
        </div>
    )
}