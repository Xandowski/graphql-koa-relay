import koa from 'koa'
import cors from 'koa2-cors'
import mount from 'koa-mount'
import { graphqlHTTP } from 'koa-graphql'
import { schema } from './graphql/schema/schema'
import { context } from './context'

const app = new koa()

const PORT = process.env.PORT || 9000

app.use(
  cors({
    origin: "*"
  })
)

app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
      context: context
    })
  )
)

const server = app
  .listen(PORT, async () => {
    console.log(`Server listenin on port: ${PORT}` )
  }).on("error", err => {
      console.error(err)
  })

  export default server