import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

// This is going to be the Landing page
export default function Home() {
  return (
    <>
      <Nav />
      <Sidebar />
      
    </>
  );
}
