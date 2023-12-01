const WishListItem = ({
  heading,
  number,
  url,
  siteTitle,
  siteDescription,
  siteImage,
}) => {
  return (
    <div className="mb-6 flex w-full gap-4 border-b-[3px] border-b-silverTree pb-6 text-white">
      <div className="font-handwriting text-3xl">{number}</div>
      <div>
        <div className="mb-4 flex flex-1 items-center justify-between">
          <h3 className="flex-1 font-sans text-3xl font-bold">{heading}</h3>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="button small !inline-flex items-center justify-center rounded-full bg-countyGreen leading-none text-white"
          >
            Details
          </a>
        </div>
        <div className="flex border-1 border-white">
          <div className="flex-1 p-6">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="mb-4 inline-block uppercase hover:underline"
            >
              {url}
            </a>
            <h3 className="mb-4 font-sans text-2xl font-bold">{siteTitle}</h3>
            <p className="text-sm">{siteDescription}</p>
          </div>
          <img
            src={siteImage}
            alt={siteTitle}
            className="w-full flex-1 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default WishListItem
