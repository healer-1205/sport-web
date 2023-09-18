import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Futsal } from "./pages/Futsal"
import { Football } from "./pages/Football"
import { Match } from "./pages/Match"
import { Team } from "./pages/Team"

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
        <Route
          path="/matches"
          element={
            <Layout>
              <Match />
            </Layout>
          }
        />
        <Route
          path="/teams"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
      </Routes>
    </>
  )
}

export default App
