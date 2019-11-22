import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import { schema } from './graphql'

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: { hello: () => 'Hello world!' },
    graphiql: true,
  }),
)

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
