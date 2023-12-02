import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Contact, ReadLeads, CreateLeads } from "./pages"

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadLeads />} />
        <Route path="/createLeads" element={<CreateLeads />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
