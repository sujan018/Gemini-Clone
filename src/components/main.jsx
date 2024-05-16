import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import getResponse from "../utils/generateResponse";
import Markdown from "react-markdown";

const Main = ({ setAllConvo }) => {

    const [currConversation, setCurrConversation] = useState([]);
    const [userText, setUserText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCurrConversation([...currConversation, userText]);
        const response = await getResponse(userText);
        setCurrConversation(prev => [...prev, response]);

        setUserText('');
    }

    return (
        <div className='flex flex-col w-full'>
            <div className=' flex justify-between items-center p-4 px-10'>
                <div className="text-xl">
                    Gemini
                </div>
                <div>
                    <CgProfile className="h-12 w-12 text-sky-500 bg-neutral-800 shadow p-2 rounded-full" />
                </div>
            </div>
            <div className="flex-1 px-[15%] pb-8 p-2 flex flex-col justify-center items-center overflow-hidden">
                <div className="flex-1 p-3 w-full flex flex-col gap-3 overflow-y-auto">

                    {
                        currConversation?.map((item, index) => {
                            return (<div className="flex gap-5 py-2" key={index}>
                                <div className="mt-4">
                                    <CgProfile className="h-6 w-6" />
                                </div>
                                <div className={` p-3 rounded-lg`}>
                                    <Markdown className="whitespace-pre-wrap" children={item} />
                                </div>
                            </div>)
                        })
                    }

                    {/* <div className="flex gap-5 py-2">
                        <div className="mt-4">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ?
                        </div>
                    </div>
                    <div className="flex gap-5 py-2">
                        <div className="mt-4">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facilis, molestias, ab veniam distinctio inventore possimus nostrum necessitatibus repudiandae, dolorem aspernatur vel incidunt maxime? Neque porro eum beatae? Sequi, veniam.
                        </div>
                    </div>
                    <div className="flex gap-5 py-2">
                        <div className="mt-2">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ?
                        </div>
                    </div>
                    <div className="flex gap-5 py-2">
                        <div className="mt-2">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facilis, molestias, ab veniam distinctio inventore possimus nostrum necessitatibus repudiandae, dolorem aspernatur vel incidunt maxime? Neque porro eum beatae? Sequi, veniam.
                        </div>
                    </div>
                    <div className="flex gap-5 py-2">
                        <div className="mt-2">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ?
                        </div>
                    </div>
                    <div className="flex gap-5 py-2">
                        <div className="mt-2">
                            <CgProfile className="h-6 w-6" />
                        </div>
                        <div className={` p-3 rounded-lg`}>
                            Hello How Are You ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur facilis, molestias, ab veniam distinctio inventore possimus nostrum necessitatibus repudiandae, dolorem aspernatur vel incidunt maxime? Neque porro eum beatae? Sequi, veniam.
                        </div>
                    </div> */}
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full flex ">
                        <input type="text" className="outline-none bg-neutral-800/50 text-neutral-200 rounded-3xl w-full p-4 px-5 text-sm" autoFocus={true} placeholder="Type Text Here..." value={userText} onChange={(e) => setUserText(e.target.value)} />
                        <button className="relative flex items-center" type="submit">
                            <IoMdSend className="absolute text-xl left-[-35px] text-neutral-400" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Main;