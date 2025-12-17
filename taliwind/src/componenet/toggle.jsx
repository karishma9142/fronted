export function Toggle(){
    return<div className="h-screen bg-white dark:bg-black">
        <h1 className="text-black dark:text-white">Hello world</h1>
        <button onClick={()=>{
            document.querySelector("html").classList.toggle("dark")
        }}>toggle</button>
    </div>
}