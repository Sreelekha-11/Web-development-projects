import { useEffect, useState } from "react";

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return (
            `${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center">

                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Stopwatch
                </h1>

                <div className="text-5xl font-mono font-bold text-gray-900 mb-8">
                    {formatTime(time)}
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setIsRunning(true)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg 
                        font-semibold cursor-pointer"
                    >
                        Start
                    </button>

                    <button
                        onClick={() => setIsRunning(false)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg 
                        font-semibold cursor-pointer"
                    >
                        Stop
                    </button>

                    <button
                        onClick={() => {
                            setIsRunning(false);
                            setTime(0);
                        }}
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white 
                        py-2 rounded-lg font-semibold cursor-pointer"
                    >
                        Reset
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Stopwatch;
