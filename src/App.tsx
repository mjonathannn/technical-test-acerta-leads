import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "react-toastify/dist/ReactToastify.css"

import { Contact, ReadLeads, PersonalData } from "./pages"

const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReadLeads />} />
          <Route path="/personalData" element={<PersonalData />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
