import {HiDotsVertical} from "react-icons/hi";

import dataDefault from "../utils/data.js"

import MessageCard from "./MessageCard.jsx";

const CallMessage = () => {

    const {message} = dataDefault;
    const content = message?.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <MessageCard message={item.message} date={item.date} img={item.img} name={item.name} id={item.id}/>))
    return <div className="h-screen w-2/5 overflow-scroll no-scrollbar">
        <div
            className="font-bold text-sm flex items-center justify-between px-6 pb-4 py-2 border-b-[1px] border-gray-500 border-">
            <p>Client Messages</p>
            <HiDotsVertical/>
        </div>
        {message && content}

    </div>;
};

export default CallMessage;
