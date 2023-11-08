import AuthForm from './auth-form'

export default function Home() {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="header">Star Performance Pop-up</h1>
        <p className="">
          Send link to client and specify rep.
        </p>
      </div>
      <div className="col-6 auth-widget">
        <AuthForm />
      </div>
    </div>
  )
}
