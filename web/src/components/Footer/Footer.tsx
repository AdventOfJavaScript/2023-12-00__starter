const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-0 w-full bg-acadia py-[72px] text-center dark:bg-blackPearl">
      <img
        src="/images/logo__secret-santa--small.svg"
        alt="Secret Santa"
        className="relative mx-auto mb-16"
      />

      <p className="font-sans font-medium text-scotchMist">
        Copyright &copy;2023.{' '}
        <a
          href="https://ahhacreative.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:no-underline"
        >
          Ah Ha Creative, LLC
        </a>
        . All Rights Reserved.
        <br />
        Terms &amp; Conditions . Privacy Policy . Disclaimers
      </p>
    </footer>
  )
}

export default Footer
