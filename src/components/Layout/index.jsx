import { Header } from "../Header"
import { Footer } from "../Footer"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex-1 bg-gray-100 min-h-[calc(100vh-600px)]">
        <div className="py-6">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
