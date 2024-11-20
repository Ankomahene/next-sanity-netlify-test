import { type SchemaTypeDefinition } from 'sanity';
import printService from './print';
import designService from './graphic';
import giftsAndPackages from './print/giftsAndPackages';
import printCategories from './print/printCategories';
import productTypes from './print/productTypes';
import colors from './print/colors';
import sizes from './print/sizes';
import tShirtPrintTypes from './print/tshirtPrintTypes';
import itemImage from './print/itemImage';
import galleryImage from './print/galleryImage';
import colorVariation from './print/colorVariation';
import productTags from './print/productTags';
import professionTags from './print/professionTags';
import designTypes from './graphic/designTypes';
import { featuredProducts } from './print/featuredProducts';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    printService,
    giftsAndPackages,
    printCategories,
    productTypes,

    colors,
    sizes,
    productTags,
    professionTags,
    tShirtPrintTypes,

    featuredProducts,

    designService,
    designTypes,

    // ---------------
    itemImage,
    galleryImage,
    colorVariation,
  ],
};
