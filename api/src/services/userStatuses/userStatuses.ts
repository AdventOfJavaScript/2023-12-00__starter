import type {
  QueryResolvers,
  MutationResolvers,
  UserStatusRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userStatuses: QueryResolvers['userStatuses'] = () => {
  return db.userStatus.findMany()
}

export const userStatus: QueryResolvers['userStatus'] = ({ id }) => {
  return db.userStatus.findUnique({
    where: { id },
  })
}

export const createUserStatus: MutationResolvers['createUserStatus'] = ({
  input,
}) => {
  return db.userStatus.create({
    data: input,
  })
}

export const updateUserStatus: MutationResolvers['updateUserStatus'] = ({
  id,
  input,
}) => {
  return db.userStatus.update({
    data: input,
    where: { id },
  })
}

export const deleteUserStatus: MutationResolvers['deleteUserStatus'] = ({
  id,
}) => {
  return db.userStatus.delete({
    where: { id },
  })
}

export const UserStatus: UserStatusRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userStatus.findUnique({ where: { id: root?.id } }).user()
  },
  event: (_obj, { root }) => {
    return db.userStatus.findUnique({ where: { id: root?.id } }).event()
  },
}
