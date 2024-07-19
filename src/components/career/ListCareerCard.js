import { useNavigate } from "react-router-dom";
import careerPhotos from "../../assets/images/career_photos/careerExportPhotos"


const ListJobCard = (props) => {

    const navigateTo = useNavigate()


    console.log(props.allData.header1);

    return (
        <div className="w-full md:w-1/3 p-1 rounded overflow-hidden shadow-lg">
            <img className="w-full h-2/4" src={careerPhotos[props.keyChild]} alt="Your image_description" />
            <div className="px-2 py-2">
                <div className="font-bold text-Green text-sm mb-2">{props.allData.header1}</div>
                <div className="text-gray-700 text-xs">{props.allData.para1.substring(0, 50)} . . .</div>
            </div>
            <button className="bg-Green text-xs text-white font-bold py-1 px-2 m-1 rounded" onClick={() => { navigateTo('/SpecificCareer', { state: props, careerImg: careerPhotos[props.keyChild] }); document.getElementById('careerPageId').scrollIntoView({ behavior: 'smooth', block: 'start' });  }}>
                Read More
            </button>
        </div >
    )
}
export default ListJobCard