const menuItems = [
    "সর্বশেষ",
    "বিশেষ সংবাদ",
    "রাজনীতি",
    "করোনাভাইরাস",
    "বাংলাদেশ",
    "বিশ্ব",
    "বাণিজ্য",
    "মতামত",
    "খেলা",
    "বিনোদন",
    "চাকরি",
    "জীবনযাপন", 
]
function Menubar (){
    const items = menuItems.map(item => <p className="hover:text-blue-500 pl-2 mx-3">{item}</p> )
    return(
        <div className="w-full h-1/6 flex flex-row justify-center p-4 m-2 text-sm font-bold border-b-2 border-y-2 ">
            {items}
        </div>
    )
};
export default Menubar;