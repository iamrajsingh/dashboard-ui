import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DoughnutChart from "./DoughnutChart";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Invite
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className=" z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Invite to an Event
                  </Dialog.Title>
                  <div className="mt-2">
                  <input
                      type="text"
                      name="text"
                      placeholder="Enter you name"
                      className=" placeholder:text-slate-400 block border mb-2 border-slate-300 rounded-md py-2 px-4 pr-3 shadow-sm bg-slate-100 focus:bg-white focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 sm:text-sm"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className=" placeholder:text-slate-400 block border border-slate-300 rounded-md py-2 px-4 pr-3 shadow-sm bg-slate-100 focus:bg-white focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 sm:text-sm"
                    />
                  </div>
                  <div className="mt-4">
                    <button className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                      Invite
                    </button>
                    <button
                      type="button"
                      className="inline-flex ml-2 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancle
                    </button>
                  </div>

                  <div className="mt-4"></div>
                  <DoughnutChart />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
