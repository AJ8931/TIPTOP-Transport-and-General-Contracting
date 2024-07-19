import { useLocation } from "react-router-dom";
import SpecificCareerCard from "../components/career/SpecificCareerCard"

import ListCareerCard from "../components/career/ListCareerCard";
import content2 from "../assets/contents/ListCareersData.json"

import careerPhotos from "../assets/images/career_photos/careerExportPhotos";


const SpecificCareerPage = () => {

    const currentLoc = useLocation()

    return (
        <div style={{ position: 'relative', width: '80%', margin: 'auto' }} id="careerPageId">
            <img style={{ height: '280px', width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0px 0px', position: 'relative', top: '100px', right: '0px', zIndex: '1'}} src={careerPhotos[currentLoc.state.keyChild]} alt="Career_Image" />
            <div style={{ paddingTop: '100px', right: '0', width: '100%', marginRight: 'auto' }}>
                <SpecificCareerCard data={currentLoc.state} />

            </div>
            <h1 className="text-4xl mb-0 p-4">Similar Posts</h1>
            <div className="flex flex-wrap pb-10">

                {Object.values(content2).map((d, k) =>
                (
                    (d.header1 === currentLoc.state.allData.header1)
                        ?
                        ""
                        :
                        <ListCareerCard key={k} keyChild={k} allData={d} />
                )
                )}
            </div>
        </div>
    )
}
export default SpecificCareerPage;