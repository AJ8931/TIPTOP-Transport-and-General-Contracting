import { useLocation } from "react-router-dom";
import SpecificWorkRange from "../components/workRange/SpecificWorkRange";
import ListWorkRangeCard from "../components/workRange/ListWorkRangeCard";
import content from "../assets/contents/profileData.json"
import profileImages from "../assets/images/ProfileCarousel_imgs/profileExportImgs";


const WorkRangesPage = () => {
    const currentLoc = useLocation()

    return (
        <>
            <div style={{ position: 'relative', width: '80%', margin: 'auto' }} id="wr_parentDivId">
                <img style={{ height: '300px', width: '100%', borderRadius: '8px 8px 0px 0px', position: "relative", top: '100px', right: '0px', zIndex: '1', objectFit: 'cover' }} src={profileImages[currentLoc.state.childKey]} alt="Work_Image" />
                <div style={{ paddingTop: '100px', right: '0', width: '100%', marginRight: 'auto',borderRadius: '0px 0px 10px 10px' }}>
                    <SpecificWorkRange data={currentLoc.state} />
                </div>
                <h1 className="text-4xl mb-0 p-4">Similar Posts</h1>
                <div className="flex flex-wrap pb-10">

                    {Object.values(content).map((d, k) => (
                        (d.header1 === currentLoc.state.allData.header1)
                        ?
                        ""
                        :
                        <ListWorkRangeCard key={k} childKey={k} allData={d} />                     
                    ))}
                </div>
            </div>
        </>
    )
}
export default WorkRangesPage;