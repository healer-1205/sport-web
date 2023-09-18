import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export const Header = () => {
  const navigate = useNavigate()
  const [navigation, setNavigation] = useState([])
  const [headers, setHeaders] = useState([])

  useEffect(() => {
    setNavigation([
      { name: "Futsal", to: "/futsal", current: false },
      { name: "Football", to: "/football", current: false },
      { name: "Cricket", to: "/cricket", current: false },
      { name: "Basketball", to: "/basketball", current: false },
    ])
    setHeaders([
      { name: "Scores", to: "/scores", current: false },
      { name: "News", to: "/news", current: false },
      { name: "About", to: "/about", current: false },
      { name: "Contact", to: "/contact", current: false },
    ])
  }, [])
  return (
    <Disclosure as="header" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <p
                    className="text-2xl leading-6 text-gray-300 cursor-pointer"
                    onClick={() => {
                      navigate("/")
                    }}>
                    NepScore
                  </p>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs lg:flex lg:justify-center hidden">
                  {headers.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => {
                        setHeaders((_prev) => {
                          const tmp = [..._prev]
                          for (let i = 0; i < tmp.length; i++) {
                            tmp[i].name === item.name
                              ? (tmp[i].current = true)
                              : (tmp[i].current = false)
                          }
                          return tmp
                        })
                      }}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2 justify-center"
              aria-label="Global">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "inline-flex items-center rounded-md py-2 px-3 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => {
                    setNavigation((_prev) => {
                      const tmp = [..._prev]
                      for (let i = 0; i < tmp.length; i++) {
                        tmp[i].name === item.name
                          ? (tmp[i].current = true)
                          : (tmp[i].current = false)
                      }
                      return tmp
                    })
                  }}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {headers.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
