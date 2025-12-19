import profileImg from "/profileImg.jpeg";
export function MainComponent() {
    return (
        <div className="w-full bg-white mt-32 flex flex-col md:flex-row gap-12 px-10 ">

            <div className="place-items-center place-content-center hidden md:block md:w-2/12 h-64 border border-[#e1dfdf] shadow-lg rounded-xl bg-white -translate-y-8">
                <img className="h-28 rounded-2xl" src={profileImg} alt="profileImg" />
                <p className="font-sans font-bold">Karishma Rawat</p>
                <p className="text-gray-400 text-xs pt-1">karishm@gamil.com</p>
                <p className="text-gray-400 text-xs">8283102938</p>
                <p className="text-gray-400 text-xs pt-1">Rohtas, Bihar</p>
            </div>
            <div className="md:w-6/12 w-full mt-8 ">
                <p className="text-sm pb-2">Friday, 19 December</p>
                <h1 className="text-2xl font-semibold text-[#042B5B]">
                    Good morning, Karishma! 😊
                </h1>
                <div className=" w-full h-105 rounded-xl border border-[#e1dfdf] shadow-lg bg-white mt-8">
                    <div className="flex justify-between m-5 p-2 bg-gray-100 rounded-sm pl-5">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6">
                                <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z" /></svg>
                            <p className="pl-5">Friday, 19 Decemder 2025</p>
                        </div>
                        <div className="flex fill-gray-400 mr-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 mr-3">
                                <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6">
                                <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" /></svg>
                        </div>
                    </div>
                    <div className="flex border-b border-gray-300 m-7">
                        <div className="mr-3 mb-2">
                            <p className="text-sm md:text-xl">11:30 AM</p>
                            <p className="text-xs md:text-sm text-gray-400 mt-1">11:30 AM</p>
                        </div>
                        <div className="text-[#3FE0D0] text-5xl font-thin -mt-1">
                            <p>|</p>
                        </div>
                        <div className="ml-3">
                            <div className="flex items-center">
                                <p className="text-xs text-gray-400">Live</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-red-500 h-4 ml-2">
                                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>
                            </div>

                            <p className="mt-1">UX Webinar</p>
                        </div>
                    </div>

                    <div className="flex border-b border-gray-300 m-7">
                        <div className="mr-3 mb-2">
                            <p className="text-sm md:text-xl">12:30 AM</p>
                            <p className="text-xs md:text-sm  text-gray-400 mt-1">11:30 AM</p>
                        </div>
                        <div className="text-[#3FE0D0] text-5xl font-thin -mt-1">
                            <p>|</p>
                        </div>
                        <div className="ml-3">
                            <div className="flex items-center">
                                <p className="text-xs text-gray-400">Upcoming</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-[#2890FF] h-4 ml-2">
                                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>
                            </div>

                            <p className="mt-1">My First Webinar</p>
                        </div>
                    </div>

                    <div className="flex border-b border-gray-300 m-7">
                        <div className="mr-3 mb-2">
                            <p className="text-sm md:text-xl">2:30 PM</p>
                            <p className="text-xs md:text-sm  text-gray-400 mt-1">11:30 AM</p>
                        </div>
                        <div className="text-[#3FE0D0] text-5xl font-thin -mt-1">
                            <p>|</p>
                        </div>
                        <div className="ml-3">
                            <div className="flex items-center">
                                <p className="text-xs text-gray-400">Upcoming</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-[#2890FF] h-4 ml-2">
                                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>
                            </div>

                            <p className="mt-1">Important Webinar</p>
                        </div>
                    </div>
                    <div className="flex m-7">
                        <div className="mr-3 mb-2">
                            <p className="text-sm md:text-xl">3:30 PM</p>
                            <p className="text-xs md:text-sm text-gray-400 mt-1">11:30 AM</p>
                        </div>
                        <div className="text-[#3FE0D0] text-5xl font-thin -mt-1">
                            <p>|</p>
                        </div>
                        <div className="ml-3">
                            <div className="flex items-center">
                                <p className="text-xs text-gray-400">Live</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="fill-[#2890FF] h-4 ml-2">
                                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>
                            </div>

                            <p className="mt-1">Webinar 1</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid h-48 grid-cols-2 place-content-evenly gap-0 pl-3 md:w-3/12 w-full  shadow-lg border border-[#e1dfdf] bg-white rounded-xl mt-6 md:mt-31">
                <div className="flex flex-col justify-center place-items-center">
                    <div className="h-11 w-11 bg-[#40E0D0] rounded-sm place-items-center place-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="h-6 z-10">
                            <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z" /></svg>
                    </div>
                    <p className="text-xs font-bold pt-2">Shedue a Webinar</p>
                </div>
                <div className="flex flex-col justify-center place-items-center">
                    <div className="h-11 w-11 bg-[#40E0D0] rounded-sm place-items-center place-content-center">
                        <p className="text-3xl">+</p>
                    </div>
                    <p className="text-xs font-bold pt-2">Join Webinar</p>
                </div>


                <div className="flex flex-col justify-center place-items-center">
                    <div className="h-11 w-11 bg-[#40E0D0] rounded-sm place-items-center place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className=" h-6">
                    <path d="M128 128C92.7 128 64 156.7 64 192L64 448C64 483.3 92.7 512 128 512L384 512C419.3 512 448 483.3 448 448L448 192C448 156.7 419.3 128 384 128L128 128zM496 400L569.5 458.8C573.7 462.2 578.9 464 584.3 464C597.4 464 608 453.4 608 440.3L608 199.7C608 186.6 597.4 176 584.3 176C578.9 176 573.7 177.8 569.5 181.2L496 240L496 400z" /></svg>
                    </div>
                    <p className="text-xs font-bold pt-2">Opne Reocding</p>
                </div>



            </div>

        </div>
    );
}
