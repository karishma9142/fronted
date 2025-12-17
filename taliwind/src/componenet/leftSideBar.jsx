export function LeftSideBar(){
    return <div className="flex bg-red-400">
        <div className="bg-pink-400 w-1/5 md:block md:h-screen transition-all duration-1000 p-4 hover:p-32 h-2">
            sidebar
        </div>
        <div className="bg-red-400 w-full h-screen">
            content
        </div>
    </div>
}