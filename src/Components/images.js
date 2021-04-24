import banner1 from '../assets/images/banner1.jpg'
import reserved_table from '../assets/images/table_service.jfif'
import foodplainBg from '../assets/images/foodplainBg.jfif'
import foodOrder from '../assets/images/food-order2.png'
import dish from '../assets/images/image.png'
import reserved from '../assets/images/reserved.png'
import delivery from '../assets/images/food-agent.png'
import Jelof from '../assets/images/jollof_rice_dodo.jpg'
import PetCoke from '../assets/images/coke-pet-trans.png'
import Customer from '../assets/images/person-eating.jpg'

export const heroImages = [
    {
        src: banner1,
        header: 'Home-made Meals',
        altText: 'banner1'
    },
    {
        src: reserved_table,
        header: 'Reaserve A Table',
        altText: 'reserved_table'
    },
    {
        src: foodplainBg,
        header: 'Try our Specials',
        altText: 'foodPlainBg'
    }
]

export const ourServices = [
    {
        src: dish,
        alt: 'serving-plate'
    },
    {
        src: foodOrder,
        alt: 'order-food-online'
    },
    {
        src: delivery,
        alt: 'delivery-agent'
    },
    {
        src: reserved,
        alt: 'reserved-table'
    }
]

export const foodMenu = [
    {
        foodType: 'food-combo-drink',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        drinkImg: {
            src: PetCoke,
            altText: 'drink'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    },
    {
        foodType: 'food-combo-drink',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        drinkImg: {
            src: PetCoke,
            altText: 'drink'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    },
    {
        foodType: 'food-combo-drink',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        drinkImg: {
            src: PetCoke,
            altText: 'drink'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    },
    {
        foodType: 'food-only',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    },
    {
        foodType: 'food-only',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    },
    {
        foodType: 'food-only',
        foodImg: {
            src: Jelof,
            altText: 'jelof-rice'
        },
        plus: '&#43;',
        foodItemName: 'Lorem Ipsum yenyen',
        foodItemMakeUp: 'Bla de bla, bla de bla',
        amount: '&#8358;500',
    }
]
export const customers = [
    {
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128076;'
    },
    {
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128077;'
    },
    {
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128076;'
    },
    {
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128077;'
    }
]
