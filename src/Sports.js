
function Sports() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-2/6"></div>
            <div className="w-full h-1/6 flex ">
                <p className="p-4 ml-4 font-bold text-lg mt-5 hover:underline decoration-red-800 m-2 ">পঠিত</p>
                <p className="p-4 font-bold text-lg mt-5 hover:underline decoration-red-800 m-2 ml-4  ">আলোচিত</p>
                <p className="p-4 font-bold text-lg mt-5 hover:underline decoration-red-800 m-2 ml-4 ">সুখবর</p>
                <div className="w-[5%] h-[5%] "> </div>
                <img src="circle.jpeg" className="w-[3%] h-[3%] my-10" />
                <p className="font-bold text-base hover:text-blue-500 my-10 ">খেলা</p>
            </div>
        </div>
    )
};
export default Sports;