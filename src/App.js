import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Početnastranica from "./components/početnastranica";
import DvadesettriDoDvadesetčetiri from "./components/2023to2024";
import DvadesetčetiriDoDvadesetpet from "./components/2024to2025";
import DvadesetpetDoDvadesetšest from "./components/2025to2026";
import DvadesetšestDoDvadesetsedam from "./components/2026to2027";
import English from "./components/english";

function App() {
  const [data] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Početnastranica data={data} />} />
        <Route
          path="/2023-2024"
          element={<DvadesettriDoDvadesetčetiri data={data} />}
        />
        <Route
          path="/2024-2025"
          element={<DvadesetčetiriDoDvadesetpet data={data} />}
        />
        <Route
          path="/2025-2026"
          element={<DvadesetpetDoDvadesetšest data={data} />}
        />
        <Route
          path="/2026-2027"
          element={<DvadesetšestDoDvadesetsedam data={data} />}
        />
        <Route path="/english" element={<English data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
