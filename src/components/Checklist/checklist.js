import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';

// Component on the landing page that display a checklist of tips
export default function Checklist ({containerTitle, list}) {
    return(
        <div className="mb-10">
            <h2 className="text-brown text-2xl">{containerTitle}</h2>
            {
                list.map( (item, index) => (
                    <div key={`${containerTitle}-${index}`} className="flex mb-2">
                        <input type="checkbox" id="item-1" className="mr-2 mt-1.5 flex justify-center items-center p-2 h-4 text-2xl appearance-none border-2 border-brown border-solid rounded" />
                        <label htmlFor="item-1" >{item}</label>
                    </div>   
                ))
            }
            <div className="flex justify-start items-center mt-4">
                <button className='text-mediumGray border-2 border-brown border-solid rounded w-1/3 p-1 flex justify-center items-center gap-2'>
                    <Image priority={false} src={grayPlusIcon} width={15} height={10} alt="Plus icon, when click, opens add item to Checklist page." />
                    <p>Add Item</p>
                </button>
            </div>
        </div>
    )
}