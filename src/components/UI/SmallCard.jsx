// eslint-disable-next-line react/prop-types
const SmallCard = ({bgColor, title, number, icon, index}) => {

    return (
        <div className={`${bgColor} flex items-center p-2 px-4 w-36 rounded-2xl`} key={index}>
            <div className={` rounded-md flex justify-center items-center w-8 h-8 bg-[rgba(0,0,0,.1)]`}>
                {/*<FaCalendarCheck className="text-black" />*/}
                {icon}
            </div>
            <div className="ml-2 flex flex-col justify-center font-semibold">
                <p className="text-white text-[10px]">{title}</p>
                <p className="text-white text-sm">{number}</p>
            </div>
        </div>
    );
};

export default SmallCard;
