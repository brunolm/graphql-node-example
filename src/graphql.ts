import { importSchema } from 'graphql-import'
import { applyMiddleware } from 'graphql-middleware'
import { makeExecutableSchema } from 'graphql-tools'
import * as path from 'path'

const typeDefs = importSchema(path.resolve(__dirname, './schema.graphql'))
const resolvers = {
  Query: {
    Message: (parent, { id }, context) => {
      return [
        { id: 1, message: 'message 1' },
        { id: 2, message: 'message 2' },
        { id: 3, message: 'message 3' },
        { id: 4, message: 'message 4' },
        { id: 5, message: 'message 5' },
      ].find((x) => x.id === +id)
    },

    Note: (parent, args, context) => {
      console.log('args', args)

      return [{ id: 5, note: 'message 5' }]
    },
  },

  Mutation: {
    setMessage(_, { input }) {
      console.log('message', input)

      return { id: (Math.random() * 100) | 0, message: input.message }
    },
  },
}

export const schema = applyMiddleware(makeExecutableSchema({ typeDefs, resolvers }))
