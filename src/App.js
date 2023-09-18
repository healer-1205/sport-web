import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Futsal } from "./pages/Futsal"
import { Football } from "./pages/Football"

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/futsal"
          element={
            <Layout>
              <Futsal />
            </Layout>
          }
        />
        <Route
          path="/football"
          element={
            <Layout>
              <Football />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default App
