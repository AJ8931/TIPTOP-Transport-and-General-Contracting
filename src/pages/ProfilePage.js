import content from "../assets/contents/profileContent.json"
import CarouselProfile from "../components/CarouselProfile.js"

const ProfilePage = () => {
    return (
        <>
            <div className="w-4/5 m-auto text-center">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-Green pt-12">
                    {content.header}
                </h1>

                <p className="p-4 text-lg mb-4 tracking-tight text-Green">
                    {content.content}
                </p>

                <p className="p-4 mb-4 tracking-tight text-Green underline font-bold">
                    {content.para}
                </p>
            </div>
            <CarouselProfile />

        </>
    )
}
export default ProfilePage;