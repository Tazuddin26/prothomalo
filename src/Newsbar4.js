import Advbarbig from "./Advbarbig";

function Newsbar4() {
    return (

        <div className="w-full h-full flex border-b ">
            <div className="w-4/12 h-full flex m-2">
                <p className="font-bold hover:text-blue-500 pt-4 mb-2 ">রানি এলিজাবেথের অন্তিমযাত্রা: আজ কখন কী হবে</p>
                <img src="img10.jpeg" className="w-[40%] h-[30%] py-4 mr-2" />
            </div>
            <div className="w-4/12 h-full flex border-l p-2 my-2">
                <p className="font-bold hover:text-blue-500">কৌতুক অভিনেতা রনির অবস্থা আগের চেয়ে ভালো, জানালেন চিকিৎসক </p>
                <img src="img11.jpeg" className="w-[50%] h-[30%]  mb-2" />
            </div>
            <div className="w-4/12 h-full flex p-2 border-l my-2">
                <p className="font-bold hover:text-blue-500 ">বিএনপি নেতা–কর্মীদের ওপর হামলায় নির্দেশনা নেই, কেউ জড়ালে শাস্তি: কাদের </p>
                <img src="img12.jpeg" className="w-[50%] h-[30%]  my-2 " />
            </div>
        </div>
    )
};
export default Newsbar4;
