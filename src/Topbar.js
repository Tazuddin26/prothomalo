function Topbar(){
    return(
        <div className="w-full h-2/6 flex flex-row">
            
            <div className="w-4/12 h-1/6 flex my-4">
                <img src="img2.jpeg" className="w-[24%] h-1/6  flex p-2 ml-4 hover:bg-gray-300 "/>
                <img src="img3.jpeg" className=" w-[14%] h-1/6 flex p-2 m-2 hover:bg-gray-300  "/>
            </div>
            <div className="w-full flex justify-center">
                <img src="image1.jpeg" className="w-[38%] p-6 pb-2"/>  
            </div>
            <img src="img4.jpeg" className="w-[5%] h-[3%] flex p-3 m-2"/>
            <div className=" w-[10%] h-[2%] login-container bg-gray-100 hover:text-blue-800 m-5 p-2 border rounded-lg ">
                <button type="submit">Login</button>  
            </div>
        </div>
    )
};
export default Topbar;