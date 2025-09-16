'use client'

import { useEffect, useState } from "react";
import  WebApp from "@twa-dev/sdk";
//import { WebApp } from "@twa-dev/types";

/*declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp
    }
  }
}*/

interface UserData {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home () {
  const [userData, setUserData] = useState< UserData | null > (null);

 useEffect(() => {
    if(WebApp.initDataUnsafe.user) {
       setUserData(WebApp.initDataUnsafe.user as UserData);
    }
  }, [])


/*useEffect(() => {
  if(typeof window !== undefined && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      const initData = tg.initData || '';
      const initDataUnsafe = tg.initDataUnsafe || {}
      setUserData(initDataUnsafe.user as UserData)
  }else {
    alert('Is not telegram')
  }

})*/

  return (
    <main className="p-4">
      {
        userData ?
           (
            <>
            <h2 className="text-2x1 font-bold mb-4">User data</h2>
            <ul>
              <li>ID: {userData.id}</li>
              <li>First Name: {userData.first_name}</li>
              <li>Last Name {userData.last_name}</li>
              <li>Username {userData.username}</li>
              <li>Language code {userData.language_code}</li>
              <li>Is Premium {userData.is_premium? 'Yes': 'No'}</li>
            </ul>
            </>
           )
          :
          <div>Loading ...</div>
      }
    </main>
  )
}