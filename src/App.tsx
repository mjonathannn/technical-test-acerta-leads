import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ReadLeads, CreateLeads } from "./pages"

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReadLeads />} />
        <Route path="/createLeads" element={<CreateLeads />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
