export default function Preloader() {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-mybg overflow-hidden">
            <div className="w-32 h-32 relative flex items-center justify-center">
                <div
                    className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl animate-pulse"
                ></div>

                <div className="w-full h-full relative flex items-center justify-center">
                    <div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-myPrimary via-cyan-500 to-mySecondary animate-spin blur-sm"
                    ></div>

                    <div
                        className="absolute inset-1 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden"
                    >
                        <div className="flex gap-1 items-center">
                            <div
                                className="w-1.5 h-12 bg-myPrimary rounded-full animate-[bounce_1s_ease-in-out_infinite]"
                            ></div>
                            <div
                                className="w-1.5 h-12 bg-cyan-500 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.1s]"
                            ></div>
                            <div
                                className="w-1.5 h-12 bg-purple-700 rounded-full animate-[bounce_1s_ease-in-out_infinite_0.2s]"
                            ></div>
                            <div
                                className="w-1.5 h-12 bg-mySecondary rounded-full animate-[bounce_1s_ease-in-out_infinite_0.3s]"
                            ></div>
                        </div>

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-500/10 to-transparent animate-pulse"
                        ></div>
                    </div>
                </div>

                <div
                    className="absolute -top-1 -left-1 w-2 h-2 bg-purple-700 rounded-full animate-ping"
                ></div>
                <div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-mySecondary rounded-full animate-ping delay-100"
                ></div>
                <div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-myPrimary rounded-full animate-ping delay-200"
                ></div>
                <div
                    className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-300"
                ></div>
            </div>
        </div>

    )
}
