'use client';

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
import Nav from "../components/Nav";
import ChangeSettings from "./ChangeSettings";

export default function ChangeSettingsPage() {
  const { data: session } = useSession();
  interface UserData {
    username: string;
    email: string;
    profilePicture?: string;
  }

  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const user = await response.json();
      return user;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    if (session?.user?.id) {
      fetchUserData(session.user.id).then((data) => {
        setUserData(data);
      });
    }
  }, [session]);

  if (!session) {
    return <p>Loading...</p>;
  }

  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <>
      <Nav isLoggedIn={true} />
      <ChangeSettings
        settings={{
          username: userData.username,
          email: userData.email,
          profilePicture: userData.profilePicture || "https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png",
        }}
      />
      <Footer />
    </>
  );
}