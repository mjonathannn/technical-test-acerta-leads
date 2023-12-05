import { BrowserRouter, Route, Routes } from "react-router-dom"

// import { Contact, ReadLeads, PersonalData } from "./pages"
import { Contact, PersonalData } from "./pages"

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PersonalData />} />
        {/* <Route path="/personalData" element={<PersonalData />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
