import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<HomeScreen />} />
    </Routes>
  );
}
