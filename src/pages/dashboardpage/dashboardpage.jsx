import React, { useState , useEffect} from "react";

import Header from "../../components/Header/Header";

import UserDashboard from "../../components/UserDashboard/UserDashboard";
import AdminDashboard from "../../components/AdminDashboard/AdminDashboard";
function DashboardPage() {
  const [localEmail,setLocalEmail] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("window.innerHeight", window.innerHeight);
    }
    setLocalEmail(JSON.stringify(window.localStorage.getItem("email")));
  }, []);

  return (
    <>
   <Header/>
   <div> 
   {
   localEmail === JSON.stringify("gaganjoshi@gmail.com") || 
   localEmail === JSON.stringify("divyanshjaryal6@gmail.com") || 
   localEmail === JSON.stringify("khusboo.aggarwal@thewitslab.com") 
   ? (<UserDashboard/>) :
   localEmail === JSON.stringify("pulkit.chouhan@thewitslab.com") 
   ? (<AdminDashboard/>) : ("")
  } 
    </div>

    </>
  );
}

export default DashboardPage;
