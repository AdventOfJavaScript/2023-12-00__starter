import Card, { type CardProps } from '../Card/Card'

interface ThankYouFormProps {
  card: CardProps
}

const ThankYouForm = ({ card }: ThankYouFormProps) => {
  return (
    <form>
      <h1 className="page-title ">Thank You</h1>
      <div className="mb-4 flex items-center gap-6">
        <div className="font-handwriting text-3xl uppercase text-white">To</div>
        <Card {...card} />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ThankYouForm
