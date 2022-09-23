import { GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql"
import { connectionDefinitions, globalIdField } from "graphql-relay" 

export const RecipeType = new GraphQLObjectType({
  name: 'Recipe',
  description: 'Recipe Type',
  fields: () => ({
    id: globalIdField('Recipe'),
    title: {
      type: GraphQLString,
      resolve: recipe => recipe.title,
    },
    ingredients: {
      type: GraphQLString,
      resolve: recipe => recipe.ingredients,
    },
    directions: {
      type: GraphQLString,
      resolve: recipe => recipe.directions,
    },
    time: {
      type: GraphQLInt,
      resolve: recipe => recipe.time,
    },
    serves: {
      type: GraphQLInt,
      resolve: recipe => recipe.serves,
    },
    difficult: {
      type: GraphQLString,
      resolve: recipe => recipe.difficult,
    },
    imageUrl: {
      type: GraphQLString,
      resolve: recipe => recipe.ingredients,
    },
  })
})

export const { connectionType: RecipeConnection, edgeType: RecipeEdge } = connectionDefinitions({
  nodeType: RecipeType,
})