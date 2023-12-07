import type {
  QueryResolvers,
  MutationResolvers,
  PairingRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const pairings: QueryResolvers['pairings'] = () => {
  return db.pairing.findMany()
}

export const pairing: QueryResolvers['pairing'] = ({ id }) => {
  return db.pairing.findUnique({
    where: { id },
  })
}

export const createPairing: MutationResolvers['createPairing'] = ({
  input,
}) => {
  return db.pairing.create({
    data: input,
  })
}

export const updatePairing: MutationResolvers['updatePairing'] = ({
  id,
  input,
}) => {
  return db.pairing.update({
    data: input,
    where: { id },
  })
}

export const deletePairing: MutationResolvers['deletePairing'] = ({ id }) => {
  return db.pairing.delete({
    where: { id },
  })
}

export const Pairing: PairingRelationResolvers = {
  event: (_obj, { root }) => {
    return db.pairing.findUnique({ where: { id: root?.id } }).event()
  },
  santa: (_obj, { root }) => {
    return db.pairing.findUnique({ where: { id: root?.id } }).santa()
  },
  person: (_obj, { root }) => {
    return db.pairing.findUnique({ where: { id: root?.id } }).person()
  },
}
