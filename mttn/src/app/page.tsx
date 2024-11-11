import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Link from "next/link";


// This is going to be the Landing page
export default function Home() {
  return (
    <>
      <Nav />
      <Sidebar />
      {/*
      <div className="flex gap-4 p-4">
        <Link href="/login">
          <Button type="submit">Log in</Button>
        </Link>

        <Link href="/createAccount">
          <Button type= "submit">Create Account</Button>
        </Link>
      </div>
      */}
      <Footer />
    </>
  );
}
