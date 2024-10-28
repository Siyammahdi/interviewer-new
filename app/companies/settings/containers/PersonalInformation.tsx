// components/PersonalInformation.tsx
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const PersonalInformation = () => {
    const [phone, setPhone] = useState("");

    return (
        <div className="max-w-5xl mx-auto flex gap-10 p-6">
            <div className="w-1/4">
                <h2 className=" font-semibold mb-2">Personal Information</h2>
                <p className="text-sm text-gray-500 mb-6">Input your name, contact info, and profile photo.</p>
            </div>


            <div className="w-full">
                <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-2xl">👤</span>
                    </div>
                    <div>
                        <button className="ml-4 px-3 py-1 border rounded-xl font-semibold text-sm text-gray-600">Change avatar</button>
                        <p className="text-gray-500 text-xs mx-4 my-1">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                        />
                    </div>

                    <div className="overflow-y-visible">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <PhoneInput
                            country={"us"}
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            inputClass="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
                            specialLabel=""
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformation;
