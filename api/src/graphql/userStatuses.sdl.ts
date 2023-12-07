export const schema = gql`
  type UserStatus {
    id: Int!
    userId: Int!
    user: User!
    eventId: String!
    event: Event!
    status: Status!
  }

  enum Status {
    INVITED
    DECLINED
    ACCEPTED
  }

  type Query {
    userStatuses: [UserStatus!]! @requireAuth
    userStatus(id: Int!): UserStatus @requireAuth
  }

  input CreateUserStatusInput {
    userId: Int!
    eventId: String!
    status: Status!
  }

  input UpdateUserStatusInput {
    userId: Int
    eventId: String
    status: Status
  }

  type Mutation {
    createUserStatus(input: CreateUserStatusInput!): UserStatus! @requireAuth
    updateUserStatus(id: Int!, input: UpdateUserStatusInput!): UserStatus!
      @requireAuth
    deleteUserStatus(id: Int!): UserStatus! @requireAuth
  }
`
