const cards = [
    { time: '2 Days ago' },
    { time: '3 Days ago' },
    { time: '4 Days ago' },
    { time: '4 Days ago' },
    { time: '5 Days ago' },
    { time: '6 Days ago' },
    { time: '6 Days ago' },
];

const Support = () => {
    return (
        <div className="sm:p-10 p-5">
            <h1 className="Gilroy_600 text-2xl mb-3">Previous Tickets</h1>
            <div className="flex flex-col gap-5">
                {cards.map((data) =>
                    <div className="rounded-lg bg-white border border-[#E4EAF4] px-8 py-5 flex justify-between flex-wrap gap-4">
                        <div>
                            <p className="Gilroy_600 mb-1.5">My music is still processing</p>
                            <p className="Gilroy_500 text-[#7E7E7E]">Hi, My music is still processing after 12 days.....</p>
                        </div>
                        <span className="Gilroy_500 text-[#7E7E7E] text-lg">{data.time}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Support;