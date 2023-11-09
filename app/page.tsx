import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import { cookies } from 'next/headers'
import SupabaseClient from '@supabase/supabase-js/dist/module/SupabaseClient'
import { redirect } from 'next/navigation'
import OnboardingForm from './onboarding_form/page'

export default async function Index() {
  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)

      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

  return isSupabaseConnected && <AuthenticationWrapper />
}

async function AuthenticationWrapper() {
  const cookieStore = cookies()

  const supabase = createClient(cookieStore)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? <div><AuthButton /><OnboardingForm /></div> : redirect("/login")
}