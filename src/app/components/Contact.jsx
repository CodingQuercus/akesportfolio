"use client";

export default function Contact() {
    return (
        <div
            id="contact"
            className="bg-[#f3f3f3] min-h-screen px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] pt-[80px] pb-[40px]"
        >
            <h1 className="text-3xl sm:text-4xl text-[#000] font-bold font-inter text-left pb-6">
                Contact
            </h1>

            <div className="bg-[#282828] p-6 sm:p-8 rounded-lg shadow-lg w-full flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">Hey, my name is</p>
                    <input
                        type="text"
                        className="bg-[#F3F3F3] rounded-lg px-4 py-2 flex-grow w-full sm:w-auto"
                        placeholder="your name..."
                    />
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">and</p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">I'm working at</p>
                    <input
                        type="text"
                        className="bg-[#F3F3F3] rounded-lg px-4 py-2 flex-grow w-full sm:w-auto"
                        placeholder="company or organisation..."
                    />
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">and</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">I'd like to say</p>
                    <textarea
                        className="bg-[#F3F3F3] rounded-lg px-4 py-2 flex-grow w-full h-32"
                        placeholder="your message..."
                    ></textarea>
                </div>

                <div className="flex justify-end mt-2">
                    <button className="bg-[#3225C8] text-[#F3F3F3] font-bold px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-[180px] rounded-lg hover:bg-blue-600 transition">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
