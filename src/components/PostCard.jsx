import { HiDotsVertical } from "react-icons/hi";
// eslint-disable-next-line react/prop-types
const bgColortype = {
    "Freelance" : "bg-[#fffbc7]",
    "Part Time" :"bg-[#fee3ff]",
    "Full Time" : "bg-[#ffdee1]"
};
// eslint-disable-next-line react/prop-types
const PostCard = ({startDate,company,name,type,index}) => {
    let currentBg = bgColortype[type];
    console.log(currentBg)
    console.log(startDate,company,name,type)
    return <div className="bg-white rounded-2xl flex flex-col gap-4 w-[13rem] p-4" key={index}>
        <div className="flex flex-row justify-between">
            <p className="text-slate-500 text-sm">{startDate}</p>
            <HiDotsVertical/>
        </div>
        <div>
            <p className="font-semibold text-sm">{company}</p>
            <p className="mb-2 font-bold text-md">{name}</p>
            <p className={`px-3 py-1 ${currentBg}   font-bold inline rounded-full text-slate-700 text-[9px] text-center`}>{type}</p>
        </div>
        <hr/>
        <div className="self-end">
            <a className="text-white bg-[#a587f9] rounded-full text-[10px] px-4 py-3 font-semibold" href="#">See
                Detail</a>
        </div>
    </div>
}
export default PostCard;