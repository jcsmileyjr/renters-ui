"use client"
import { useState} from 'react';
import Image from 'next/image';
import grayPlusIcon from '../../images/plus-icon-gray.png';
import AddCheckbox from '../AddCheckbox/addCheckbox';

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
export default function Checklist ({containerTitle, list, database}) {
    const [checkList, setCheckList] = useState(list);

    const getChecklistItem = async (content) => {
        if(content === "")return;
        if(content !== null || content === "") {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'item': content})
            }
            
            let response;
            if(database === "A") {
                response = await fetch('http://localhost:8080/createCheckListItemA', requestOptions);  
            } else {
                response = await fetch('http://localhost:8080/createCheckListItemB', requestOptions);     
            }
            const data = await response.json();
            setCheckList(data);  
        }

    }
    return(
        <div className="mb-10 last:mb-0">
            <h2 className="text-brown text-2xl">{containerTitle}</h2>
            {
                checkList.map( (item, index) => (
                    <Checkbox key={`${containerTitle}-${index}`} item={item.item} containerTitle={containerTitle} />
                ))
            }
            <AddCheckbox newCheckListItem={getChecklistItem} />
        </div>
    )
}