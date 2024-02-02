"use client"
import { useState} from 'react';
import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';

const Checkbox = ({item, containerTitle}) => {
    const [value, setValue] = useState(false);

    return (
        <div className="flex mb-2">
            <input checked={value} onChange={()=> setValue(!value)} type="checkbox" id="item-1" className="checked:bg-brown bg-paleYellow cursor-pointer mr-2 mt-1.5 flex justify-center items-center p-2 h-4 text-2xl appearance-none border border-brown border-solid rounded" />
            <label htmlFor="item-1" >{item}</label>
        </div> 
    )
}

// Component on the landing page that display a checklist of tips
export default function Checklist ({containerTitle, list}) {
    return(
        <div className="mb-10 last:mb-0">
            <h2 className="text-brown text-2xl">{containerTitle}</h2>
            {
                list.map( (item, index) => (
                    <Checkbox key={`${containerTitle}-${index}`} item={item.item} containerTitle={containerTitle} />
                ))
            }
            <div className="flex justify-center items-center mt-4">
                <button className='bg-paleYellow text-mediumGray border border-brown border-solid rounded w-2/5 sm:w-2/4 p-1 flex justify-center items-center gap-2'>
                    <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add item to Checklist page." />
                    <p>Add Item</p>
                </button>
            </div>
        </div>
    )
}