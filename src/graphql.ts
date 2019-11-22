import { importSchema } from 'graphql-import'
import { applyMiddleware } from 'graphql-middleware'
import { IResolvers, makeExecutableSchema } from 'graphql-tools'
import { yupMiddleware } from 'graphql-yup-middleware'
import * as path from 'path'

import { messageMutations, messageQueries } from './message'
import { noteQueries } from './note'

const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))
const resolvers: IResolvers<any, any> = {
  Query: {
    ...messageQueries,

    ...noteQueries,
  },

  Mutation: {
    ...messageMutations,
  },
}

console.log('yupMiddleware', yupMiddleware)

export const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }), yupMiddleware())
