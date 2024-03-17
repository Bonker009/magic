import {useState} from "react";
import SmallCard from "./UI/SmallCard";
import {FaCalendarCheck} from "react-icons/fa";
import {FaDownload} from "react-icons/fa6";
import {TfiMenuAlt} from "react-icons/tfi";
import {BiLoaderCircle} from "react-icons/bi";
import Modal from "./UI/Modal.jsx";
import Form from "./UI/Form.jsx";
import PostCard from "./PostCard.jsx";
import dataDefault from "../utils/data.js"

const smallDataCard = [
    {
        icon: <FaCalendarCheck/>,
        title: "Finish Project",
        bgColor: "bg-[#9a92ff]",
        number: 13
    },
    {
        icon: <FaDownload/>,
        title: "Upcoming",
        bgColor: "bg-[#b28eff]",
        number: 13
    },
    {
        icon: <TfiMenuAlt/>,
        title: "Total Project",
        bgColor: "bg-[#e779bc]",
        number: 13
    },
    {
        icon: <BiLoaderCircle/>,
        title: "In Progress",
        bgColor: "bg-[#f27189]",
        number: 4
    }
]
// eslint-disable-next-line react/prop-types
const Content = ({isShowing, onStopShowing, onCreateCard}) => {
    console.table(dataDefault.data)
    const [cardData, setCardData] = useState(dataDefault.data);
    const [data, setData] = useState({
        name: "",
        position: "",
        company: "",
        type: "",
        startDate: "",
        endDate: "",
        detail: "",
    });
    console.table(cardData)

    const cardDataHandler = (data) => {
        const {name, value} = data;
        const updatedData = {
            ...data,
            [name]: value,
        };
        setData(updatedData);
        setCardData(prevCardData => {
            const existingIndex = prevCardData.findIndex(item => item.name === name);
            if (existingIndex !== -1) {
                const updatedCardData = [...prevCardData];
                updatedCardData[existingIndex] = updatedData;
                return updatedCardData;
            } else {
                return [...prevCardData, updatedData];
            }
        });
    };
    console.table(cardData)

    console.table(data)
    return (
        <div className="bg-gray-100 w-[60rem] rounded-3xl p-4 h-screen">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-2xl font-bold">Project</h1>
                <button
                    className="uppercase bg-gray-300 font-semibold px-4 py-2 rounded-md text-black text-xs"
                    type="button"
                    onClick={onCreateCard}
                >
                    Add New Project
                </button>
            </div>
            {isShowing && (
                <Modal onClose={onStopShowing}>
                    <Form onSendData={cardDataHandler} onCancel={onStopShowing}/>
                </Modal>
            )}
            <div className="flex gap-4 justify-around mt-4">
                {smallDataCard && smallDataCard?.map((item,index) => (
                    // eslint-disable-next-line react/jsx-key
                    <SmallCard index={index} number={item.number} title={item.title} bgColor={item.bgColor}
                               icon={item.icon}/>
                ))}
            </div>
            <div className="mt-4 flex gap-4 flex-wrap justify-around">
                {/* eslint-disable-next-line react/jsx-key */}
                {cardData && cardData?.map((item, index) => <PostCard type={item.type} index={index}
                                                                      startDate={item.startDate} company={item.company}
                                                                      name={item.name}/>)}
            </div>

        </div>
    );
};

export default Content;
