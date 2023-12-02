import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Contact, ReadLeads, PersonalData } from "./pages"

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadLeads />} />
        <Route path="/personalData" element={<PersonalData />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
