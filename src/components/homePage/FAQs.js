import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Data from "../../assets/contents/FAQs.json"

const FAQs = () => {
    return (
        <section className='flex flex-col justify-center items-center w-[100%] pb-8 pt-10 text-Green bg-white'>
                <div className='flex justify-start items-center text-center flex-col w-full'>
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-Green">FAQs</h2>
                    <div className="relative text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-Dark_Green">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-8 py-2 text-lg text-center italic text-blue font-semibold">Have a Question? Find Your Answers Here"</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-Dark_Green">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="m-8 overflow-hidden p-9 bg-blue rounded-xl min-w-[400px]">
                    {Data.ArrayObject.map((QA) => (
                        <div key={QA.id} className="group my-3 accordion-section border-y-[1px] border-Dark_Green" tabIndex="1">
                            <div
                                className="group bg-white flex justify-between px-4 py-6 items-center text-Green transition ease duration-500 cursor-pointer pr-10 relative"
                            >
                                <div className="group-focus:text-Dark_Green transition ease duration-500 text-xl h-8 w-fit">
                                    Question {QA.id}: {QA.question}
                                </div>
                                <div
                                    className="h-8 w-8 border border-Dark_Green rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:border-Green group-focus:text-Green group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2 p-6"
                                >
                                    <FontAwesomeIcon size='lg' icon={faChevronDown} />
                                </div>
                            </div>
                            <div
                                className="group-focus:max-h-screen max-h-0 bg-darkblue px-4 overflow-hidden ease duration-500"
                            >
                                <p className="p-2 text-Green text-justify text-lg rounded-full">
                                    {QA.Answer}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
        </section>
    )
}

export default FAQs