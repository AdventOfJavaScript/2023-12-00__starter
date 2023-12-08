import type { UsersQuery } from 'types/graphql'

import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <ul>
      {users.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
