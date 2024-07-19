import content from "../assets/contents/ListCareersContent.json"
import content2 from "../assets/contents/ListCareersData.json"

import ListCareerCard from "../components/career/ListCareerCard"
const ListCareersPage = () => {

    
    return (
        <>
            <div className="grid grid-cols-1 py-4 sm:grid-cols-3 my-8 w-4/5 m-auto ">
                <div className="p-4 bg-Green text-white ">
                    <h1 className="p-2 mt-0 mb-2 text-xl font-medium leading-tight text-primary font-bold">{content.leftBar.heading}</h1>
                    <p className="p-2 text-sm ">{content.leftBar.content}</p>
                </div>
                <div className="col-span-2 p-2">
                    <div className="p-2 ">
                        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-Green">{content.rightBar.heading}</h1>
                        <p className="p-0 text-sm text-gray-700 ">{content.rightBar.content}</p>
                    </div>
                    <div className="flex flex-wrap ">
                        {Object.values(content2).map((d, k) => {
                            return (
                                <ListCareerCard key={k} keyChild={k} allData={d} />
                            )
                        })}

                    </div>

                </div>
            </div>

        </>
    )
}
export default ListCareersPage;