import Card from '../Card/Card'
import RoundButton from '../RoundButton/RoundButton'

const InviteGroup = () => {
  return (
    <div>
      {/* form */}
      <div className="label ml-5">Invite a friend or family member</div>
      <div className="mb-10 ml-5 flex items-center gap-5 bg-spanishGreen p-4">
        <div className="field flex-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder=""
          />
        </div>
        <div className="field flex-1">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="input"
            placeholder=""
          />
        </div>
        <RoundButton status="warning" />
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <Card
          avatar={{
            alt: 'Avatar',
            avatar: 'https://picsum.photos/seed/1701322447715/300/300',
          }}
          email="email@email.com"
          name="Amy Dutton"
        />
        <Card
          avatar={{
            alt: 'Avatar',
            avatar: 'https://picsum.photos/seed/1701322447715/300/300',
          }}
          email="email@email.com"
          name="Amy Dutton"
        />
      </div>
    </div>
  )
}

export default InviteGroup
