'use client'; // if using Next.js app directory

import { Dialog, Transition, TransitionChild, DialogPanel } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";

const Signin = () => {
  let [isOpen, constIsOpen] = useState(false);


  const closeModal = () => {
    constIsOpen(false);
  };

  const openModal = () => {
    constIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden md:block">
          <button
            type="button"
            className="text-[15px] font-medium text-white"
            onClick={openModal}
          >
            Sign In
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75"></div>
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="bg-white w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <img
                        className="mx-auto h-12 w-auto"
                        src="/assets/logo/Logo.svg"
                        alt="Your Company"
                      />
                      <h2 className="mt-6 text-center text-black text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                      </h2>
                    </div>

                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input type="hidden" name="remember" defaultValue="true" />
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          required
                          className="block w-full px-3 py-2 border text-black border-grey500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required
                          className="block w-full text-black px-3 py-2 border border-grey500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Password"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-black text-sm text-gray-900">
                            Remember me
                          </label>
                        </div>
                        <div className="text-sm">
                          <a href="#" className="font-medium text-black text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                          </a>
                        </div>
                      </div>

                            {/* Button Section */}
                         <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                  <LockClosedIcon  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"aria-hidden="true" />  
                             </span>
                             Sign in
                            </button>
                        </div>   
                    </form>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 text-black px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus:visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                    >
                        Got it, thanks!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signin;
