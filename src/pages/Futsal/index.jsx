import { useNavigate } from "react-router-dom"

export const Futsal = () => {
  const navigate = useNavigate()
  return (
    <div className="lg:px-6">
      <div>
        <h3 className="text-xl font-semibold leading-6 text-gray-900 pb-4 lg:px-0 px-6">
          Live Score
        </h3>
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 lg:rounded-lg shadow">
          <p className="leading-6 text-gray-900">Team A VS Team B</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex justify-center flex-col">
              <p
                className="underline flex justify-center mb-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/teams")
                }}>
                Team A
              </p>
              <div className="flex justify-center">
                <div className="bg-gray-900 px-4 py-5 sm:px-6 rounded-lg w-28">
                  <p className="text-white text-center text-3xl">3</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-col">
              <p
                className="underline flex justify-center mb-6 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  navigate("/teams")
                }}>
                Team B
              </p>
              <div className="flex justify-center">
                <div className="bg-gray-900 px-4 py-5 sm:px-6 rounded-lg w-28">
                  <p className="text-white text-center text-3xl">1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                navigate("/matches")
              }}>
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-semibold leading-6 text-gray-900 pb-4 lg:px-0 px-6">
          Upcoming Matches
        </h3>
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 lg:rounded-lg shadow">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mb-6">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    League name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date and Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    FC Barcelona VS Real Madrid CF
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              navigate("/matches")
            }}>
            See more...
          </button>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-semibold leading-6 text-gray-900 pb-4 lg:px-0 px-6">
          Results
        </h3>
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 lg:rounded-lg shadow">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg mb-6">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    colSpan="4"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    League name
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    FC Barcelona VS Real Madrid CF
                  </td>
                  <td
                    className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 cursor-pointer"
                    onClick={() => {
                      navigate("/matches")
                    }}>
                    Details
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Date
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    B won
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              navigate("/matches")
            }}>
            See more...
          </button>
        </div>
      </div>
    </div>
  )
}
