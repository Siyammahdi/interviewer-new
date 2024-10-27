"use client";

import { useState } from "react";
import { BiCameraOff } from "react-icons/bi";
import { IoCamera, IoMic, IoMicOff, IoVolumeHigh, IoVolumeMute, IoCheckmark } from "react-icons/io5"; // Importing icons from react-icons

const Interview = () => {
    const [cameraEnabled, setCameraEnabled] = useState(false);
    const [microphoneEnabled, setMicrophoneEnabled] = useState(false);
    const [speakerEnabled, setSpeakerEnabled] = useState(false);

    // Check if all the devices are enabled
    const allDevicesEnabled = cameraEnabled && microphoneEnabled && speakerEnabled;

    return (
        <div className="w-full">
            <h1 className="text-4xl font-semibold mb-2">Take the General Interview.</h1>
            <p className="text-gray-500 mb-6">Youll be taking a 20 minute interview.</p>
            <div className="flex gap-16 justify-between">

                <div className="w-2/3">
                    <div className="relative w-full h-96 bg-black mb-4 rounded-xl">
                        {/* video placeholder */}
                        <div className="absolute inset-0 flex justify-center items-center">
                            <span className="text-white text-sm">Camera is disabled</span>
                        </div>
                    </div>

                    {/* Dropdowns */}
                    <div className="flex text-sm font-semibold space-x-4">
                        <select className="w-1/3 rounded-lg">
                            <option>Default - Microphone</option>
                        </select>

                        <select className="w-1/3 rounded-lg">
                            <option>Default - Headphones</option>
                        </select>

                        <select className="w-1/3 rounded-lg">
                            <option>Permission required</option>
                        </select>
                    </div>
                </div>

                <div className="w-1/3">
                    <h1 className="text-2xl font-semibold mb-2">Ready to join?</h1>
                    <p className="text-gray-500 mb-6">Please ensure your devices are properly configured.</p>
                    {/* Camera, Microphone, Speaker Controls */}
                    <div className="space-y-3 mb-4 md:mb-0">
                        <button
                            onClick={() => setCameraEnabled(!cameraEnabled)}
                            className={`w-full flex items-center justify-between space-x-2 px-2 py-4 border rounded-xl ${cameraEnabled ? "border-blue-500 text-blue-500" : "border-gray-300"}`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>
                                    {cameraEnabled ? (
                                        <IoCamera className="text-blue-500" />
                                    ) : (
                                        <BiCameraOff className="text-gray-300" />
                                    )}
                                </span>
                                <span>{cameraEnabled ? "Camera Enabled" : "Enable Camera"}</span>
                            </div>
                            <div className={`flex items-center justify-center w-5 h-5 border rounded-md ${cameraEnabled ? 'border-blue-500' : 'border-gray-300'}`}>
                                {cameraEnabled && <IoCheckmark className="text-blue-500" />}
                            </div>  {/* Select Mark */}
                        </button>

                        <button
                            onClick={() => setMicrophoneEnabled(!microphoneEnabled)}
                            className={`w-full flex items-center justify-between space-x-2 px-2 py-4 border rounded-xl ${microphoneEnabled ? "border-blue-500 text-blue-500" : "border-gray-300"}`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>
                                    {microphoneEnabled ? (
                                        <IoMic className="text-blue-500" />
                                    ) : (
                                        <IoMicOff className="text-gray-300" />
                                    )}
                                </span>
                                <span>{microphoneEnabled ? "Microphone Enabled" : "Enable Microphone"}</span>
                            </div>
                            <div className={`flex items-center justify-center w-5 h-5 border rounded-md ${microphoneEnabled ? 'border-blue-500' : 'border-gray-300'}`}>
                                {microphoneEnabled && <IoCheckmark className="text-blue-500" />}
                            </div>
                        </button>

                        <button
                            onClick={() => setSpeakerEnabled(!speakerEnabled)}
                            className={`w-full flex items-center justify-between space-x-2 px-2 py-4 border rounded-xl ${speakerEnabled ? "border-blue-500 text-blue-500" : "border-gray-300"}`}
                        >
                            <div className="flex items-center space-x-2">
                                <span>
                                    {speakerEnabled ? (
                                        <IoVolumeHigh className="text-blue-500" />
                                    ) : (
                                        <IoVolumeMute className="text-gray-300" />
                                    )}
                                </span>
                                <span>{speakerEnabled ? "Speaker Enabled" : "Enable Speaker"}</span>
                            </div>
                            <div className={`flex items-center justify-center w-5 h-5 border rounded-md ${speakerEnabled ? 'border-blue-500' : 'border-gray-300'}`}>
                                {speakerEnabled && <IoCheckmark className="text-blue-500" />}
                            </div> {/* Select Mark with styled border */}
                        </button>

                        {/* Join Now Button */}
                        <button
                            className={`w-full px-6 py-3 font-semibold text-white rounded-xl shadow-md ${allDevicesEnabled ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-300 cursor-not-allowed'}`}
                            disabled={!allDevicesEnabled}  // Disable if not all devices are enabled
                        >
                            Join now
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Interview;
