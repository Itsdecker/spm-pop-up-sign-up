import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AuthButton from '../components/AuthButton';
import OnboardingForm from './onboarding_form/page';
import SpmLogo from '../components/SpmLogo';


export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);

      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return isSupabaseConnected && <AuthenticationWrapper />;
}

async function AuthenticationWrapper() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className='w-full flex flex-col items-center relative min-h-screen'>
      <div className="absolute top-0 right-0">
        <AuthButton />
      </div>
      <div className="my-4">
        <SpmLogo />
      </div>
      <div className="w-full max-w-4xl px-4">
        <OnboardingForm />
      </div>
    </div>
  );
}