import { useEffect, useState, Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"

export const Team = () => {
  const [teams, setTeams] = useState([])
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  useEffect(() => {
    setTeams([
      {
        id: 1,
        logo: "Real Madrid",
        info: "team information",
      },
    ])
  }, [])

  return (
    <div className="px-6">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Team Details</h2>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
          {teams.map((team) => (
            <div
              key={team.id}
              className="pt-10 grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-4 col-span-12">
                <div className="mt-4 lg:mt-6 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {team.logo}
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-8 col-span-12">
                <div className="mt-4 lg:mt-6 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {team.info}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-lg font-medium text-gray-900 mt-6 mb-2">Players</h2>
        <p
          className="text-base text-gray-900 cursor-pointer"
          onClick={() => {
            setOpen(true)
          }}>
          Player A
        </p>
        <p
          className="text-base text-gray-900 cursor-pointer"
          onClick={() => {
            setOpen(true)
          }}>
          Player B
        </p>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900">
                        Player data
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-sm text-gray-500">Age</p>
                        <p className="text-sm text-gray-500">Sex</p>
                        <p className="text-sm text-gray-500">Play position</p>
                        <p className="text-sm text-gray-500">Height</p>
                        <p className="text-sm text-gray-500">Weight</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                      onClick={() => setOpen(false)}>
                      OK
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}>
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
