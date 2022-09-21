import { useParams } from "react-router-dom";
import newsList from "./data"
function Newspage() {
    const { id } = useParams();
    const news = newsList[id];
    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-9/12 h-full">
                <div className="w-full h-1/6 ">
                    <p className="font-bold text-2xl text-start hover:text-blue-500 pl-6 px-2 underline my-4">{news.topic}</p>
                </div>
                <div className="w-full h-2/6 m-4">
                </div>
                <div className="w-full h-1/6 text-start pl-6 p-2">
                    <p>{news.source}</p>
                </div>
                <div className="w-full h-2/6  p-4">
                    <p className="font-bold text-4xl text-start hover:text-blue-500 px-2">{news.title}</p>
                </div>
                <div className="w-full h-2/6 ">
                    <p className="text-start pl-6">{news.writer} </p>
                    <p className="text-start font-thin text-sm p-2 m-4">{news.publicationDate}</p>
                    <div className="w-11/12 h-1/6 flex justify-end border-b ml-8 ">
                        <img src="fb.jpeg" className="w-[5%] m-4" />
                        <img src="twit.jpeg" className="w-[5%] m-4 ml-2" />
                        <img src="printer.jpeg" className="w-[5%] mr-6" />
                    </div>
                </div>
                <div className="w-11/12 h-full m-8 ">
                    <img src={news.image} className="w-[100%]" />
                    <p className="text-start text-sm font-thin p-2 border-b ml-4">{news.details}</p>
                </div>
            </div>
            <div className="w-3/12 h-full flex justify-center flex-col">
                <img src="tea.jpeg" className="w-[80%] p-2" />
                <img src="orion.jpeg" className="w-[80%] p-2" />
                <img src="sam.jpeg" className="w-[80%] p-2" />
            </div>
        </div>

    )
};
export default Newspage;