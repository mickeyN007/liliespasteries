import { About, Home, Products, LearnToday } from "../pages";
import { Contact } from "../pages/Contact";

export const navLinks = [
  { label: "ORDER ONLINE", path: "/products", element: Products },
  { label: "GALLERY", path: "/what-we-do", element: Home },
  { label: "CONTACT US", path: "/contact", element: Contact },
  { label: "ABOUT US", path: "/about-us", element: About },
  { label: "LEARN TODAY", path: "/learn-today", element: LearnToday },
] as const;
