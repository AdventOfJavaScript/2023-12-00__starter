export const schema = gql`
  type Pairing {
    id: Int!
    eventId: String!
    event: Event!
    santaId: Int!
    santa: User!
    personId: Int!
    person: User!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    pairings: [Pairing!]! @requireAuth
    pairing(id: Int!): Pairing @requireAuth
  }

  input CreatePairingInput {
    eventId: String!
    santaId: Int!
    personId: Int!
  }

  input UpdatePairingInput {
    eventId: String
    santaId: Int
    personId: Int
  }

  type Mutation {
    createPairing(input: CreatePairingInput!): Pairing! @requireAuth
    updatePairing(id: Int!, input: UpdatePairingInput!): Pairing! @requireAuth
    deletePairing(id: Int!): Pairing! @requireAuth
  }
`
