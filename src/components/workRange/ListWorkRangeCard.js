import { useNavigate } from "react-router-dom";
import profileImages from "../../assets/images/ProfileCarousel_imgs/profileExportImgs";

const ListJobCard = (props) => {

    // console.log(currLoc.state);
    const navigateTo = useNavigate()


    

    return (
        <div className="w-full md:w-1/3 p-1 rounded overflow-hidden shadow-lg">
            <img className="w-full h-2/4" src={profileImages[props.childKey]} alt="Your image_description" />
            <div className="px-2 py-2">
                <div className="font-bold text-Green text-sm mb-2">{props.allData.header1}</div>
                <div className="text-gray-700 text-xs">{props.allData.para1.substring(0, 50)} . . .</div>
            </div>
            <button className="bg-Green text-xs text-white font-bold py-1 px-2 m-1 rounded" onClick={() => { navigateTo('/WorkRanges', { state: props, imgIndex: props.childKey }); document.getElementById('wr_parentDivId').scrollIntoView({behavior:'smooth',block:'start'})}}>
                Read More
            </button>
        </div >
    )
}
export default ListJobCard