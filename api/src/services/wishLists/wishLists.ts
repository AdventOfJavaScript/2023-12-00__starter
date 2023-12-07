import type {
  QueryResolvers,
  MutationResolvers,
  WishListRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const wishLists: QueryResolvers['wishLists'] = () => {
  return db.wishList.findMany()
}

export const wishList: QueryResolvers['wishList'] = ({ id }) => {
  return db.wishList.findUnique({
    where: { id },
  })
}

export const createWishList: MutationResolvers['createWishList'] = ({
  input,
}) => {
  return db.wishList.create({
    data: input,
  })
}

export const updateWishList: MutationResolvers['updateWishList'] = ({
  id,
  input,
}) => {
  return db.wishList.update({
    data: input,
    where: { id },
  })
}

export const deleteWishList: MutationResolvers['deleteWishList'] = ({ id }) => {
  return db.wishList.delete({
    where: { id },
  })
}

export const WishList: WishListRelationResolvers = {
  user: (_obj, { root }) => {
    return db.wishList.findUnique({ where: { id: root?.id } }).user()
  },
  event: (_obj, { root }) => {
    return db.wishList.findUnique({ where: { id: root?.id } }).event()
  },
}
