const HomeBanner = () => (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4x1 md:text-6x1 font-bold text-white mb-4">
                    Summer Sale
                </h1>
                <p className="text-lg md:text-xl text-white mb-2">
                    Enjoy discouts on selected items
                </p>
                <p className="text-2x1 md:text-5x1 text-yellow-400 font-bold">
                    Up to 50% off
                </p>
            </div>
        </div>
    </div>
);

export default HomeBanner;