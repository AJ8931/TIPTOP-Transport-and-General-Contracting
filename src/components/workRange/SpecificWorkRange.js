import { useNavigate } from "react-router-dom"

const SpecificWorkRange = (props) => {
    const navigateTo = useNavigate()

    console.log(props.data);


    return (
        <div className="flex w-full opacity-90  mb-10">
            <div
                className="block rounded-b-lg bg-Green p-6 shadow-lg">
                
                <h5
                    className="xl:text-4xl text-3xl text-white font-extrabold pb-6 sm:w-4/6 w-5/6 ">
                    {props.data.allData.header1}
                </h5>
                <p className="mb-4 text-base text-white">
                    <p className="sm:w-5/5 md:w-5/5 ">
                        {props.data.allData.para1}
                    </p>
                </p>

                <button
                    type="button"
                    className="inline-block rounded bg-Dark_Green px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-Light_Green/75 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => { navigateTo('/ContactUs') }}
                >
                    Click Here to apply
                </button>
            </div>
        </div>
    )
}
export default SpecificWorkRange