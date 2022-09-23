import { PrismaClient } from '@prisma/client'
import { GraphQLNonNull, GraphQLObjectType } from 'graphql'
import { connectionArgs, connectionFromArray } from 'graphql-relay'
import { RecipeConnection } from '../recipe/RecipeType'

const prisma = new PrismaClient({
  log: ['query']
})

export const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: () => ({
    recipes: {
      type: new GraphQLNonNull(RecipeConnection),
      args: connectionArgs,
      resolve: async (_, args) => {
        const data = await prisma.recipe.findMany()
        return connectionFromArray(data, args)
      }
    },
  })
})