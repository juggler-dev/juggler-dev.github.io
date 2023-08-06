import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <Routes>
      <Route path="/home" exact element={<HomeScreen />} />
    </Routes>
  );
}
