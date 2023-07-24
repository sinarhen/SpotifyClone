import useCurrentUser from "@/hooks/useCurrentUser";
import serverAuth from "@/libs/serverAuth";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import { useMemo, useEffect, useState, useCallback } from "react";
import Player from "@/components/Player";

// export async function getServerSideProps(context:NextPageContext){
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props: {}
//   };
// }


export default function Home() {
  const [user, setUser] = useState(null);
  const [mainSectionPage, setMainSectionPage] = useState('home');
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)

  useEffect(() => {
    if (user) {
      setIsAuthorized(true)
    }
  }, [user])

  return (
    <div className="fixed w-full h-full">
      <div className=" z-10 grid grid-cols-7 grid-rows-5 w-full h-full">
        <div className="col-span-1 row-span-2">
          <Navbar handleHomeClick={() => {setMainSectionPage('home')}} handleSearchClick={() => {setMainSectionPage('search')}}/>
        </div>
        <div className="col-span-2 row-span-3 col-start-1 row-start-3">
          My library
        </div>
        <div className="col-span-6 row-span-5 col-start-2 row-start-1">
          <MainSection isAuthorized={isAuthorized}/>
        </div>
      </div>
      <Player />     
    </div>
  )
}