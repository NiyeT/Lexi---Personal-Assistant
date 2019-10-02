/**
 * Blocks
 *
 * The Blocks folder contains all of the block types that are avialble for the sites.
 *
 * https://www.youtube.com/watch?v=Jqn_wjkSZwo&t=17s
 *
 * Default Exports
 * Default exports look like this.
 * export default function(){}
 *
 * Named Exports
 * Named exports look like this.
 * export const foo = something
*/

// Import Default Componets Here
import DefaultBlock from './DefaultBlock'
import ProfileBio from './ProfileBio'
import Product from './Product'

// Export Default Components Here
export {
  DefaultBlock,
  ProfileBio,
  Product
}

// Export Named Components Here
// export * from './Layout'
