import Footer from 'src/components/Footer/Footer'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <main className="bg-auth">
        <img
          src="/images/logo__secret-santa.svg"
          alt="Secret Santa"
          className="mx-auto mb-10 w-[460px] pt-16"
        />
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AuthLayout
