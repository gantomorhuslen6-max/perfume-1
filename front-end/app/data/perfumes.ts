// TypeScript interfaces for Perfume and Collection types

export interface Perfume {
  id: string;
  name: string;
  nameMN: string; // Mongolian name
  description?: string;
  price: number; // in Tugrug
  imageUrl: string;
  collection: string;
  gender: 'Эрэгтэй' | 'Эмэгтэй' | 'Хоёулаа';
  scentNotes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  badges: string[];
  sizes: string[];
}

export interface Collection {
  id: string;
  name: string;
  nameMN: string;
  description: string;
  tagline: string;
}

export const collections: Collection[] = [
  {
    id: 'original',
    name: 'Original Collection',
    nameMN: 'Анхны цуглуулга',
    description: 'Three pairs of creative classics paying tribute to the art of true perfumery.',
    tagline: 'loved globally since 1999'
  },
  {
    id: 'noble',
    name: 'Noble Collection',
    nameMN: 'Эрхэмсэг цуглуулга',
    description: 'Taking inspiration from eras or artistic, architectural and horticultural importance these perfumes are an epic adventure through history.',
    tagline: 'perfumes of noble birth since 2016'
  },
  {
    id: 'addictive-arts',
    name: 'Addictive Arts',
    nameMN: 'Донтуулагч урлаг',
    description: 'Crafted from stories written by British literary greats, inspired by pure elation using a ground-breaking molecule bespoke to Clive Christian.',
    tagline: 'Perfume hedonism since 2018'
  },
  {
    id: 'private',
    name: 'Private Collection',
    nameMN: 'Хувийн цуглуулга',
    description: 'Exploring a life written in perfume from the key qualities that colour the world of Clive Christian.',
    tagline: 'a story written in perfume since 2010'
  },
  {
    id: 'crown',
    name: 'Crown Collection',
    nameMN: 'Титэм цуглуулга',
    description: 'Archive perfumes from the Crown Perfumery Company reimagined for a new era of perfume connoisseur.',
    tagline: 'history reimagined since 2020'
  }
];

export const perfumes: Perfume[] = [
  // Original Collection
  {
    id: '1872-feminine',
    name: '1872 Feminine',
    nameMN: '1872 Эмэгтэй',
    price: 1150000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-1872P50LF01_1_600X600.png?v=1757948493',
    collection: 'original',
    gender: 'Эмэгтэй',
    scentNotes: {
      top: ['бергамот'],
      middle: ['пачули'],
      base: ['сарангийн сарнай']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл', '100 мл']
  },
  {
    id: '1872-masculine',
    name: '1872 Masculine',
    nameMN: '1872 Эрэгтэй',
    price: 1150000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NO1P50RM01_1_600X600.png?v=1754382941',
    collection: 'original',
    gender: 'Эрэгтэй',
    scentNotes: {
      top: ['петигрейн'],
      middle: ['цедарод'],
      base: ['салви хэм']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл', '100 мл']
  },
  {
    id: 'no1-feminine',
    name: 'No.1 Feminine',
    nameMN: 'No.1 Эмэгтэй',
    price: 2500000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB7P50F01_1_600X600.png?v=1668701542',
    collection: 'original',
    gender: 'Эмэгтэй',
    scentNotes: {
      top: ['пименто'],
      middle: ['мадагаскарын ванил'],
      base: ['иланг-иланг']
    },
    badges: [],
    sizes: ['50 мл']
  },
  {
    id: 'no1-masculine',
    name: 'No.1 Masculine',
    nameMN: 'No.1 Эрэгтэй',
    price: 2420000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB21P50AN01_1_600X600.png?v=1673617568',
    collection: 'original',
    gender: 'Эрэгтэй',
    scentNotes: {
      top: ['нуцлагас'],
      middle: ['сантала мод'],
      base: ['тонка хэм']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл']
  },
  
  // Noble Collection
  {
    id: 'queen-anne',
    name: 'Queen Anne Cosmos Flower',
    nameMN: 'Хатан хааны нэг наст цэцэг',
    price: 1820000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-150ANN50LF01_1_600X600.png?v=1668701552',
    collection: 'noble',
    gender: 'Эмэгтэй',
    scentNotes: {
      top: ['нимбэг'],
      middle: ['бензоин'],
      base: ['какао']
    },
    badges: [],
    sizes: ['50 мл']
  },
  {
    id: 'rococo-magnolia',
    name: 'Rococo Magnolia',
    nameMN: 'Рококо магноли',
    price: 1820000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB7P50F01_1_600X600.png?v=1668701542',
    collection: 'noble',
    gender: 'Хоёулаа',
    scentNotes: {
      top: ['кассис'],
      middle: ['цайны мод'],
      base: ['магноли']
    },
    badges: [],
    sizes: ['50 мл']
  },
  {
    id: 'art-deco-amberwood',
    name: 'Art Deco Amberwood',
    nameMN: 'Арт Декос хурмс',
    price: 1820000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB21P50AN01_1_600X600.png?v=1673617568',
    collection: 'noble',
    gender: 'Хоёулаа',
    scentNotes: {
      top: ['ангилийн үндэс'],
      middle: ['сагьев гүнзгий'],
      base: ['мод']
    },
    badges: ['шинэ'],
    sizes: ['50 мл']
  },

  // Addictive Arts
  {
    id: 'jump-kiss-ecstatic',
    name: 'Jump up and Kiss Me Ecstatic',
    nameMN: 'Үсэрч гараад намайг үнс',
    price: 1820000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-JKPE50F01_1_600X600.png?v=1668701552',
    collection: 'addictive-arts',
    gender: 'Хоёулаа',
    scentNotes: {
      top: ['жүржийн бигарэд'],
      middle: ['сантала мод'],
      base: ['тубероз']
    },
    badges: [],
    sizes: ['50 мл']
  },
  {
    id: 'jump-kiss-hedonistic',
    name: 'Jump up and Kiss Me Hedonistic',
    nameMN: 'Үсэрч гараад намайг үнс - Хэл юм, дөтөөрэй',
    price: 1820000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-JC50N01_1_600X600.png?v=1678959428',
    collection: 'addictive-arts',
    gender: 'Эрэгтэй',
    scentNotes: {
      top: ['матэтэ цай'],
      middle: ['лабданум'],
      base: ['татс']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл']
  },

  // Private Collection
  {
    id: 'l-red-tea-vetiver',
    name: 'L Red Tea Vetiver',
    nameMN: 'L Улаан цайны вэтвэри',
    price: 1300000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/files/CC-1L-RED-TEA_1_600X600_1_600X600.png?v=1737649645',
    collection: 'private',
    gender: 'Эрэгтэй',
    scentNotes: {
      top: ['нимбэг примофиоре'],
      middle: ['сантала мод'],
      base: ['роибос']
    },
    badges: ['шинэ'],
    sizes: ['50 мл']
  },
  {
    id: 'c-woody-leather',
    name: 'C Woody Leather',
    nameMN: 'C Модны савх',
    price: 1300000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-XP50LNM01_1_600X600.png?v=1744708158',
    collection: 'private',
    gender: 'Эрэгтэй',
    scentNotes: {
      top: ['мандарин'],
      middle: ['татс'],
      base: ['зургаан өнгийн навч']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл', '100 мл']
  },
  {
    id: 'v-amber-fougere',
    name: 'V Amber Fougere',
    nameMN: 'V Хурмс Фужер',
    price: 1300000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB21P50AN01_1_600X600.png?v=1673617568',
    collection: 'private',
    gender: 'Хоёулаа',
    scentNotes: {
      top: ['элеми'],
      middle: ['элсэгчит мянгуу'],
      base: ['цагаан чинжүү']
    },
    badges: [],
    sizes: ['50 мл']
  },
  {
    id: 'e-cashmere-musk',
    name: 'E Cashmere Musk',
    nameMN: 'E Кашмирн муск',
    price: 1300000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-150ANN50LF01_1_600X600.png?v=1668701552',
    collection: 'private',
    gender: 'Эмэгтэй',
    scentNotes: {
      top: ['байес сарнай'],
      middle: ['муск'],
      base: ['цэцэгний фьюжн']
    },
    badges: ['шинэ'],
    sizes: ['50 мл']
  },

  // Crown Collection
  {
    id: 'crab-apple-blossom',
    name: 'Crab Apple Blossom',
    nameMN: 'Личиний модны цэцэг',
    price: 1490000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-NB7P50F01_1_600X600.png?v=1668701542',
    collection: 'crown',
    gender: 'Эмэгтэй',
    scentNotes: {
      top: ['алимны цэцэг'],
      middle: ['сантала мод'],
      base: ['рахат']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл']
  },
  {
    id: 'matsukita',
    name: 'Matsukita',
    nameMN: 'Мацукита',
    price: 1490000,
    imageUrl: 'https://www.clivechristian.com/cdn/shop/products/CC-JC50N01_1_600X600.png?v=1678959428',
    collection: 'crown',
    gender: 'Хоёулаа',
    scentNotes: {
      top: ['бергамот'],
      middle: ['цайны мод'],
      base: ['матэтэ цай']
    },
    badges: ['шилдэг борлуулалт'],
    sizes: ['50 мл']
  }
];

// Helper functions
export function getPerfumesByCollection(collectionId: string): Perfume[] {
  return perfumes.filter(p => p.collection === collectionId);
}

export function getCollectionById(id: string): Collection | undefined {
  return collections.find(c => c.id === id);
}

export function formatPrice(price: number): string {
  return `${price.toLocaleString('mn-MN')} ₮`;
}
