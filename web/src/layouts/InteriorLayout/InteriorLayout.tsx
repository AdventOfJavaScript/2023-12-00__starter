import Footer from 'src/components/Footer/Footer'
import MyAccount from 'src/components/MyAccount/MyAccount'

type InteriorLayoutProps = {
  children?: React.ReactNode
}

const InteriorLayout = ({ children }: InteriorLayoutProps) => {
  return (
    <>
      <main className="bg-interior">
        <aside className="col-span-4 bg-no-repeat pb-10">
          <img src="/images/bg__interior.svg" alt="" />
          <img
            src="/images/logo__secret-santa.svg"
            alt="Secret Santa"
            className="absolute top-[7vw] w-[25vw]"
          />
        </aside>
        <div className="col-span-8 pr-12 pt-7">
          <div className="flex justify-end">
            <MyAccount />
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default InteriorLayout
