import Newsbar2 from "./Newsbar2";
import Newsbar3 from "./Newsbar3";
import Newsbar4 from "./Newsbar4";
import Advbarbig from "./Advbarbig";
import Sports from "./Sports";
function Newsbar() {
    //const ()
    return (
        <div className=" w-full h-full flex flex-row ">
            <div className=" w-full h-full ml-12 ">
                <div className="h-full flex border-b mr-4 p-2">
                    <div className="w-4/12 text-left p-2">
                        <p className="w-[50%]font-bold text-2xl hover:text-blue-500 p-2 "> যে ব্যক্তি ‘নতুন ট্রাম্প’ হয়ে উঠতে পারেন</p>
                        <p className="font-light text-sm mx-4">বলসোনারো বলেছেন, নির্বাচন যদি অবাধ ও স্বচ্ছ হয়,
                            তবে ফলাফল তিনি মেনে নেবেন। ব্রাজিলের নির্বাচনের ফলাফল স্বচ্ছই হওয়ার কথা। কারণ,
                            দেশটির ইলেকট্রনিক ভোটিং সিস্টেম নিয়ে খুব বেশি সংশয় নেই....</p>
                        <p className="font-light text-sm mt-5 hover:underline text-left m-4"> ২৯ মিনিট আগে</p>
                    </div>
                    <div className="w-4/12 ">
                        <img src="pic6.jpeg" className="  pt-4" />
                    </div>
                    <div className="w-4/12 border-l  ml-8">
                        <p className="font-bold text-lg hover:text-blue-500 text-left p-2">নির্বাচন কমিশন নির্বাচন সুষ্ঠু করতে ১৪ বাধা</p>
                        <p className="font-light text-sm mx-4 text-left ">নির্বাচনের সময় পুলিশ ও প্রশাসনের কর্মকর্তারা কতটা নিরপেক্ষভাবে দায়িত্ব পালন
                            করতে পারবে—এটি এখন ইসির দ্বিতীয় চিন্তা। আর নির্বাচনে ইভিএমের (ইলেকট্রনিক
                            ভোটিং মেশিন) প্রতি বেশিরভাগ দলের অনাস্থা ভোট ...</p>
                    </div>
                </div>
                <Newsbar2 />
                <Newsbar3 />
                <Newsbar4 />
                <Advbarbig />
                <Sports />
            </div>
            <div className="w-4/12 h-2/6 border-l border-b my-4 mr-6 flex flex-col ">
                <img src="adv2.jpeg" className="border-b p-5 ml-2" />
                <div className="pt-4 p-8 border-b ml-2">
                    <img src="adv3.jpeg" className="" />
                    <p className="font-bold text-base hover:text-blue-500  ">ছবিতে ফেদেরারের ক্যারিয়ারের গল্প</p>
                </div>
                <div className="pt-4 p-8 border-b ml-2 flex">
                    <p className="font-bold text-base hover:text-blue-500  ">বাংলাদেশের আত্মাও বিক্রি করে দিয়েছে আ.লীগ সরকার: আমীর খসরু</p>
                    <img src="img9.jpeg" className="w-[35%] " />
                </div>
                <div className="pt-4 p-8 flex pb-6">
                    <p className="font-bold hover:text-blue-500">মাদ্রিদ ডার্বি গোল নেই, সহায়তা নেই, তবু আনচেলত্তির ‘ম্যাচসেরা’ ভিনিসিয়ুস</p>
                    <img src="im10.jpeg" className="" />
                </div>
            </div>

        </div>

    )
};
export default Newsbar;