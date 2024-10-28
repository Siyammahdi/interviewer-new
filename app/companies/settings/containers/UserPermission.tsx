"use client"

import React from 'react';
import { BsPersonAdd } from 'react-icons/bs';

const UserPermission = () => {
    return (
            <div className="flex items-center gap-10">
                <div className="w-1/4">
                    <h2 className="font-semibold">User permissions</h2>
                    <p className="text-sm">Add your company's roles.</p>
                </div>
                <div className="text-sm mt-4 w-full">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left">Name</th>
                                <th className="text-left">Email</th>
                                <th><button className="mb-2 px-3 py-1 bg-blue-500 text-sm text-white rounded-xl flex items-center gap-2"><BsPersonAdd size={18} /> Add user</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-gray-500">
                                <td className="py-2 font-semibold text-black">Siyam Mahdi</td>
                                <td className="py-2 ">siyammahdi1@gmail.com</td>
                                <td className="py-2 text-xs font-semibold text-green-700"><span className="bg-green-100 px-2 py-1 rounded-xl">You (Owner)</span></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
    );
};

export default UserPermission;