import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BookCallPage from "./pages/BookCall.jsx";
import ConnectPage from "./pages/Connect.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import LinksPage from "./pages/Links.jsx";
import UsesPage from "./pages/Uses.jsx";
import AttributionPage from "./pages/Attribution.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookcall" element={<BookCallPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/uses" element={<UsesPage />} />
        <Route path="/attribution" element={<AttributionPage />} />
      </Routes>
    </BrowserRouter>
  );
}
