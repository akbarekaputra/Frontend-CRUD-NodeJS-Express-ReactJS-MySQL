import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../components/Footer.js";

const user = {
  name: "AKBAR EKA PUTRA",
  email: "akbarekaputra01@gmail.com",
  imageUrl: "https://i.postimg.cc/8CxvVBpm/20230211-071246.jpg",
};
const navigation = [{ name: "Dashboard", href: "#", current: true }];
const userNavigation = [
  { name: "Contact Info", href: "#" },
  { name: "github", href: "https://github.com/akbarekaputra" },
  { name: "Instagram", href: "https://instagram.com/rabkaera" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const respone = await axios.get(`http://localhost:3333/users`);
    setUser(respone.data);
  };

  const deleteUser = async (id) => {
    const confirmation = prompt(
      'Anda yakin ingin menghapus? Ketik "yes" to confirm.'
    );
    if (confirmation === "yes") {
      try {
        await axios.delete(`http://localhost:3333/users/delete/${id}`);
        getUser();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(`gagal menghapus`);
    }
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://i.postimg.cc/L5tQP8CG/logo-Rabkaera.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400 mt-1">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow">
        <div className="flex flex-row items-center justify-between mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <Link
            to={`/dashboard/add`}
            className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 flex-grow-0 flex-shrink-0 ml-4"
          >
            <AddIcon fontSize="small" />
            <h1 className="ml-2">Add User</h1>
          </Link>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="flex flex-col overflow-x-auto">
            <div class="sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-x-auto">
                  <table class="min-w-full text-left text-sm font-light">
                    <thead class="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" class="px-6 py-4">
                          No.
                        </th>
                        <th scope="col" class="px-6 py-4">
                          NIK
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Nama
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Usia
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Email
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Alamat
                        </th>
                        <th scope="col" class="px-6 py-4"></th>
                      </tr>
                    </thead>
                    {users.map((user, i) => (
                      <tbody key={user.id}>
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {i + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {" "}
                            {user.nik}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.name}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {" "}
                            {user.age}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.email}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {user.adress}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            <div class="flex justify-center space-x-2">
                              <Link
                                to={`/dashboard/edit/${user.id}`}
                                className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-yellow-600"
                              >
                                <EditIcon fontSize="small" />
                              </Link>
                              <button
                                onClick={() => deleteUser(user.id)}
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-600"
                              >
                                <DeleteIcon fontSize="small" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
