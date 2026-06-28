import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Articles } from "./pages/Articles";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "articles", Component: Articles },
      { path: "contact", Component: Contact },
    ],
  },
]);
