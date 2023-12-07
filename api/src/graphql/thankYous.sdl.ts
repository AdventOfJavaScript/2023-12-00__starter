export const schema = gql`
  type ThankYou {
    id: Int!
    eventId: String!
    event: Event!
    userId: Int!
    user: User!
    toUserId: Int!
    toUser: User!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    thankYous: [ThankYou!]! @requireAuth
    thankYou(id: Int!): ThankYou @requireAuth
  }

  input CreateThankYouInput {
    eventId: String!
    userId: Int!
    toUserId: Int!
    message: String!
  }

  input UpdateThankYouInput {
    eventId: String
    userId: Int
    toUserId: Int
    message: String
  }

  type Mutation {
    createThankYou(input: CreateThankYouInput!): ThankYou! @requireAuth
    updateThankYou(id: Int!, input: UpdateThankYouInput!): ThankYou!
      @requireAuth
    deleteThankYou(id: Int!): ThankYou! @requireAuth
  }
`
