/**
 * Block.js
 * Sets the component type based on the 'type' attribute defined in the data model
 * coming from contentful.
 *
 * How this works.
 * 1) The /src/Blocks folder contians components that use default exports
 * 2) There is an index.js file set up to import and export all default / named exports
 * 3) With that in place, it's possible to import all components at once into an alias or object
 * 4) The components can now be dynamically referenced using object literal notation
 *
 * This allows us to
 * - Read the data.type value from props
 * - Use that value to declare the component that should be used
 * - Dynamically return the Component
 */

import React, { Component } from 'react'

// Import all default exports from blocks into the myBlocks alias
// setting all default exports as objects within the myBlocks parent object
import * as myBlocks from '../../Blocks'


export default class Block extends Component {

  camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
    {
      return chr.toUpperCase();
    });
  }

  render() {

    // Check to ensure that data exists before continuing.
    // If not then return null
    const { data } = this.props
    if (!data) return null
    let { type } = data
    if (type) {
      // CamelCase the type in case there are spaces or whatever in contentful
      type = this.camelize(type);
    }

    // console.log('block type: ', type, data );

    /**
     * Sets the block type and falls back to defaults to avoid errors
     * - If no data.type exists it will default to DefaultBlock
     * - If data.type doesn't have a value it will default to DefaultBlock
     * - If data.type is not defined in the renderAs object it will default to DefaultBlock
     */
    let blockType = !type || type === 'Default' ? 'DefaultBlock'
    // eslint-disable-next-line import/namespace
    : typeof myBlocks[type] === 'undefined' ? 'DefaultBlock' : type

    if (!type) {
      blockType = 'Product';
    }

    // Set the Component to be equal to whichiver blockType has been defined
    // eslint-disable-next-line import/namespace
    const Component = myBlocks[blockType]

    // Return the block type and pass data to the component props
    return (
        <Component data={data}/>
    )
  }
}
