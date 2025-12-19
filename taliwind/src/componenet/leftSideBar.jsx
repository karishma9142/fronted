import { SidebarToggle } from "./sidebarToggle";
import profileImg from "/profileImg.jpeg";

export function LeftSideBar({ sidebarOpen, setSidebarOpen }) {
    if (!sidebarOpen) {
        return <div className='fixed top-0 left-0 '>
            <div className='cursor-pointer text-black' onClick={() => {
                setSidebarOpen(!sidebarOpen)
            }}>
                <div>
                    <SidebarToggle sidebarOpen={sidebarOpen} />
                </div>


            </div>
        </div>
    }
    return <div className='p-4 w-2/5 md:w-1/5 h-screen bg-white fixed top-0 left-0 md:relative border border-[#e1dfdf] shadow-lg flex flex-col gap-20'>
        <div>
            <div className='cursor-pointer' onClick={() => {
                setSidebarOpen(!sidebarOpen)
            }}>
                <div className=" flex justify-between pt-3 pb-2">
                    <SidebarToggle sidebarOpen={sidebarOpen}  />
                    <img className="h-10 rounded-md" src={profileImg} alt="profileImg" />
                </div>
                <div className="p-1 pt-2 pb-2 flex justify-between align-middle text-gray-400 hover:text-[#042B5B] fill-gray-400 hover:fill-[#042B5B] hover:bg-slate-200 cursor-pointer rounded-sm">
                    <p className=" text-md ">Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640 " className="h-5">
                    <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"/>
                    </svg>
                </div>
                <div className="p-1 pt-2 pb-2 flex justify-between align-middle  fill-gray-400 hover:fill-[#042B5B] text-gray-400 hover:text-[#042B5B] hover:bg-slate-200 cursor-pointer rounded-sm">
                    <p className=" text-md ">Webinars</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5">
                    <path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
                </div>
                <div className="p-1 pt-2 pb-2 flex justify-between align-middle  fill-gray-400 hover:fill-[#042B5B] text-gray-400 hover:text-[#042B5B] hover:bg-slate-200 cursor-pointer rounded-sm">
                    <p className=" text-md ">Billing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5">
                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192C576 156.7 547.3 128 512 128L128 128zM320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320C224 267 267 224 320 224zM512 248C512 252.4 508.4 256.1 504 255.5C475 251.9 452.1 228.9 448.5 200C448 195.6 451.6 192 456 192L504 192C508.4 192 512 195.6 512 200L512 248zM128 392C128 387.6 131.6 383.9 136 384.5C165 388.1 187.9 411.1 191.5 440C192 444.4 188.4 448 184 448L136 448C131.6 448 128 444.4 128 440L128 392zM136 255.5C131.6 256 128 252.4 128 248L128 200C128 195.6 131.6 192 136 192L184 192C188.4 192 192.1 195.6 191.5 200C187.9 229 164.9 251.9 136 255.5zM504 384.5C508.4 384 512 387.6 512 392L512 440C512 444.4 508.4 448 504 448L456 448C451.6 448 447.9 444.4 448.5 440C452.1 411 475.1 388.1 504 384.5z"/></svg>
                </div>
                <div className="p-1 pt-2 pb-2 flex justify-between align-middle  fill-gray-400 hover:fill-[#042B5B] text-gray-400 hover:text-[#042B5B] hover:bg-slate-200 cursor-pointer rounded-sm">
                    <p className=" text-md ">User Management</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5">
                    <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
                </div>
                <div className="p-1 pt-2 pb-2 flex justify-between align-middle  fill-gray-400 hover:fill-[#042B5B] text-gray-400 hover:text-[#042B5B] hover:bg-slate-200 cursor-pointer rounded-sm">
                    <p className=" text-md ">Setting</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-5">
                    <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>
                </div>
            </div>
        </div>
    </div>
}
