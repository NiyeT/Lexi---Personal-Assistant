export const exampleProductConfig = {
  base: [
    {
      slug: 'gobi-rice',
      label: 'Gobi Rice',
      qty: 15,
      price:'10.00',
      tags: [
        'gluten-free',
        'vegan',
      ],
    },
    {
      slug: 'biryani-rice',
      label: 'Biryani Rice',
      price:'10.00',
      tags: [
        'gluten-free',
        'vegan',
      ],
    }
  ],
  headcount:[
    {
      slug: '# people?',
      label: '# people?',
      price:'13.00',
      qty:20,
    }
  ],
  protein: [
    {
      slug: 'ahi-tuna',
      label: 'Ahi Tuna',
      price: '2.50',
      qty: 4,
    },
    {
      slug: 'salmon',
      label: 'Salmon',
      price: '2.50',
      qty: 4,
    },
    {
      slug: 'spicy-tuna',
      label: 'Spicy Tuna',
      price: '2.50',
      qty: 4,

    },
    {
      slug: 'teriyaki-tofu',
      label: 'Teriyaki Tofu',
      price: '2.50',
      qty: 4,

    },
    {
      slug: 'teriyaki-chicken',
      label: 'Teriyaki Chicken',
      price: '2.50',
      qty: 4,

    },
  ],
  veggies: [
    {
      slug: 'chana-chickpeas',
      label: 'Chana Chickpeas',
      price: '2.50',
      qty: 1,
    },
    {
      slug: 'eggplant-chips',
      label: 'Eggplant Chips',
      price: '2.50',
      qty: 1,
    },
    {
      slug: 'coconut-corn',
      label: 'Coconut Corn',
      price: '2.50',
    },
    {
      slug: 'curryflower',
      label: 'Curryflower',
      price: '2.50',
    },
  ],
  sauces: [
    {
      slug: 'tomato-chutney',
      label: 'Tomato Chutney',
      qty: 1,
    },
    {
      slug: 'cilantro-chutney',
      label: 'Cilantro Chutney',
      qty: 1,
    },
    {
      slug: 'tamarind-chutney',
      label: 'Tamarind Chutney',
    },
    {
      slug: 'cucumber-raita',
      label: 'Cucumber Raita',
    },
    {
      slug: 'golden-cobra',
      label: 'Golden Cobra',
      tags: [
        'hot'
      ]
    },
  ],
  toppings: [
    {
      slug: 'new-delhi-slaw',
      label: 'New Delhi Slaw',
    },
    {
      slug: 'avocado',
      label: 'Avacado',
    },
    {
      slug: 'street-crunch',
      label: 'Street Crunch',
    },
    {
      slug: 'pickled-cucumber',
      label: 'Picked Cucumber',
    },
    {
      slug: 'mango',
      label: 'Mango',
    },
    {
      slug: 'raisins',
      label: 'Raisins',
    },
  ],
}

// example product
const product = {
  slug: 'bhangra-bowl',
  name: 'bhangra bowl',
  price: '11.50',
  description: 'from contentful',
  image: 'from contentful',
  config: exampleProductConfig,
  customConfig: exampleProductConfig, // this would actually be the custom product config
  // this hash is generated from object-hash https://github.com/puleos/object-hash and used as an id to match product slug + custom config
  configHash: '14fa461bf4b98155e82adc86532938553b4d33a9',
}
