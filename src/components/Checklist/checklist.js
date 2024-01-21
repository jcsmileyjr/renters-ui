
// Component on the landing page that display a checklist of tips
export default function Checklist ({containerTitle, list}) {
    return(
        <div className="mb-10">
            <h2 className="text-brown text-2xl">{containerTitle}</h2>
            {list.map( (item, index) => (
                <div key={`${containerTitle}-${index}`} className="flex mb-2">
                    <input type="checkbox" id="item-1" className="mr-2 mt-1.5 flex justify-center items-center p-2 h-4 text-2xl appearance-none border-2 border-brown border-solid rounded" />
                    <label htmlFor="item-1" >{item}</label>
                </div>   
            ))

            }
        </div>
    )
}