export const Match = () => {
  return (
    <div className="px-6">
      <div className="pb-6">
        <p className="text-2xl font-semibold leading-6 text-gray-900 pb-4">
          Team A VS Team B
        </p>
        <p className="text-xl font-semibold leading-6 text-gray-900 pb-4">
          Status: <span className="text-indigo-600">Ended</span> | Upcoming |
          Live
        </p>
        <div className="flex justify-center items-center">
          <div className="bg-gray-900 px-4 py-5 sm:px-6 rounded-lg lg:w-40 w-32">
            <p className="text-white text-center text-3xl">Team A Logo</p>
          </div>
          <p className="lg:px-6 px-2 text-xl font-semibold">2 - 0</p>
          <div className="bg-gray-900 px-4 py-5 sm:px-6 rounded-lg lg:w-40 w-32">
            <p className="text-white text-center text-3xl">Team A Logo</p>
          </div>
        </div>
      </div>
      <div>
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Summary
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Team A
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Team B
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  Goal
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  2
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  0
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  Yellow Card
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  2
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  1
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  1
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  2
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  Red Card
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
