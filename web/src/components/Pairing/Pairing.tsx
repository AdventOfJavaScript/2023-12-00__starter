import Card, { type CardProps } from '../Card/Card'
import EmptyCard from '../EmptyCard/EmptyCard'

interface PairingProps {
  secretSanta: CardProps
  pairing: CardProps
  showPairing: boolean
}

const Pairing = ({ secretSanta, pairing, showPairing }: PairingProps) => {
  return (
    <div className="flex items-center gap-2">
      <Card {...secretSanta} />
      <div className="h-[10px] min-w-[40px] flex-1 bg-supernova" />
      {showPairing ? <Card {...pairing} /> : <EmptyCard />}
    </div>
  )
}

export default Pairing
