// import { createClient } from '@/utils/supabase/server';
// import { cookies } from 'next/headers';
// import { redirect } from 'next/navigation';
// import AuthButton from '../components/AuthButton';
// import OnboardingForm from './onboarding_form/page';

// export default async function Index() {
//   const cookieStore = cookies();

//   const canInitSupabaseClient = () => {
//     // This function is just for the interactive tutorial.
//     // Feel free to remove it once you have Supabase connected.
//     try {
//       createClient(cookieStore);

//       return true;
//     } catch (e) {
//       return false;
//     }
//   };

//   const isSupabaseConnected = canInitSupabaseClient();

//   return isSupabaseConnected && <AuthenticationWrapper />;
// }

// async function AuthenticationWrapper() {
//   const cookieStore = cookies();

//   const supabase = createClient(cookieStore);

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//    return user ? (
//      <div className='w-full'> JSX = HTML + JAVASCRIPT
//        <AuthButton />
//        <OnboardingForm />
//      </div>
//    ) : (
//      redirect('/login') > JAVASCRIPT
//    );
//  }

"use client";

import { useState } from "react"; // to make it reactive

export default async function Index() {
  const [user, setUser] = useState({}) // if user is set, page will update

  return <div>
    Homepage
  </div>;
}