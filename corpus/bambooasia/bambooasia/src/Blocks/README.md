# Blocks

Blocks are the basic content blocks used throughout the site. This is where you style the different content sections and how you want them to look.

Here's how to construct blocks.

## Blocks Directory
All blocks should go into the /src/Blocks directory

Each block should have it's own folder like ```/src/Blocks/BlockName```

Add an ```index.js``` file to the folder. You'll have this. ```/src/Blocks/BlockName/index.js```

Blocks have the following structure
- Index
- Block Type Router
- Content Model Components

---
## Index
```/src/Blocks/BlockName/index.js```

This is the main file for the component. It defines the formatting for the root level elements like the Headline, Sub Heading and the Body.

It will pass the blocks data on to a BlockTypeRouter, which deals with the various block types that this block may need to manage.

---
## Block Type Router
```/src/Blocks/BlockName/BlockTypeRouter.js```

A BlockTypeRouter must be configured for each block type. The router is used to determine which content models are supported by the block.

The router:
- Renders the correct component based on the type
- Passes the required data to the component

---
## Content Model Components

Each block will have a sub folder that matches the name of the content model that is being targeted. For example.

```/src/Blocks/BlockName/ContentfulNav/index.js```

This way you can isolate the files relevant to this component and keep your code clean and easy to read.