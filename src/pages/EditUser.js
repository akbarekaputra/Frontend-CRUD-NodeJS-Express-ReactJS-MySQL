import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer.js";

export default function AddUser() {
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const getUserById = async () => {
    const respone = await axios.get(`http://localhost:3333/users/${id}`);
    setNik(respone.data.nik);
    setName(respone.data.name);
    setAge(respone.data.age);
    setEmail(respone.data.email);
    setAdress(respone.data.adress);
  };

  useEffect(() => {
    getUserById();
  }, []);

  const save = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3333/users/edit/${id}`, {
        nik: nik,
        name: name,
        age: age,
        email: email,
        adress: adress,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-800">
        <div>
          <h3 className="text-4xl font-bold text-yellow-500">Edit User</h3>
        </div>
        <div
          className="px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md rounded-lg"
          style={{ width: "90%" }}
        >
          <form onSubmit={save}>
            <div className="mt-4">
              <label
                htmlFor="nik"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                NIK
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="number"
                  name="nik"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Nama
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="text"
                  name="nama"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="usia"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Usia
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="number"
                  name="usia"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="adress"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Alamat
              </label>
              <div className="flex flex-col items-start">
                <textarea
                  required
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-md active:bg-gray-900 false"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
