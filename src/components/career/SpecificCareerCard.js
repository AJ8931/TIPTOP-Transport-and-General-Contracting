import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const SpecificServicesCard = (props) => {
    const navigateTo = useNavigate()
    // const regExp = /<br>/
    // console.log(props.data.allData.para2.match('/<br\s*\/?>/gi'));

    function ParagraphToList({ text }) {
        const lines = text.split('<br/>');
        const listItems = lines.map((line, index) => <li className="list-disc ml-5" key={index}>{line}</li>);
        return <ul>
            {listItems}
        </ul>;
    }


    return (
        <div className="flex justify-center w-full opacity-90 text-justify mb-10">
            <div
                className="block rounded-b-lg bg-white p-6 px-8 max-[500px]:px-6 shadow-lg ">
                <h5
                    className="mb-2 text-xl font-bold leading-tight text-Dark_Green">
                    {props.data.allData.header1}
                </h5>
                <p className="mb-4 text-base text-Dark_Green ">
                    {props.data.allData.para1}
                </p>
                <h5
                    className="mb-2 text-xl font-semibold leading-tight text-Dark_Green">
                    {props.data.allData.header2}

                </h5>
                <p className="mb-4 text-base text-Dark_Green">
                    <ParagraphToList text={props.data.allData.para2} />
                </p>
                <h5
                    className="mb-2 text-xl font-semibold leading-tight text-Dark_Green">
                    {props.data.allData.header3}
                </h5>
                <p className="mb-4 text-base text-Dark_Green">
                    <ParagraphToList text={props.data.allData.para3} />
                </p>
                <button
                    type="button"
                    className="inline-block rounded bg-Light_Green px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3d5e45] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_#3d5e45/50,0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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
export default SpecificServicesCard