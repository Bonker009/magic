import  {useState} from 'react';
import {IoIosStar} from "react-icons/io";
import {MdOutlineStarOutline} from "react-icons/md";

// eslint-disable-next-line react/prop-types
const MessageCard = ({id,img,name,message,date}) => {
    const [onShowIcon, setOnShowIcon] = useState(false);
    return (
            <div key={id} className="flex gap-4 items-center px-4 py-2 border-b-[1px] border-gray-500">
                <img className="rounded-full w-12 h-12" src={(`../assets/Images/${img}`)} alt="Hello"/>
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-sm">{name}</h1>
                        <span onClick={() => {
                            setOnShowIcon(!onShowIcon)
                        }}>
                       {onShowIcon ? <IoIosStar/> : <MdOutlineStarOutline/>}
                   </span>

                    </div>
                    <p className="text-slate-400 text-sm">{message}</p>
                    <p className="self-end text-slate-400">{date}</p>
                </div>
            </div>
    );
};

export default MessageCard;