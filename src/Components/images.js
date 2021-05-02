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
        alt: 'serving-plate',
        id: 'eat-in',
        header: 'Stop-by & Step-in',
        subheader: 'Eat-in and/or Take-out',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium,' +
                'condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, nec tristique arcu'
    },
    {
        src: foodOrder,
        alt: 'order-food-online',
        id: 'order',
        header: 'Make your order from anywhere',
        subheader: 'Eat-in and/or Take-out',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium,' +
                'condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, nec tristique arcu'
    },
    {
        src: delivery,
        alt: 'delivery-agent',
        id: 'delivery',
        header: 'Timely delivery',
        subheader: 'Eat-in and/or Take-out',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium,' +
                'condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, nec tristique arcu'
    },
    {
        src: reserved,
        alt: 'reserved-table',
        id: 'reserved',
        header: 'Reserve table for meetings',
        subheader: 'Eat-in and/or Take-out',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra massa pretium,' +
                'condimentum dui a, lobortis lorem. Sed ultrices ex sit amet augue faucibus, nec tristique arcu'
    }
]

export const foodMenu = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 1,
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128076;'
    },
    {
        id:2,
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128077;'
    },
    {
        id: 3,
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128076;'
    },
    {
        id: 4,
        src: Customer,
        altText: 'image-of-customer',
        comment: 'Only tasty meals are sold ',
        emoji: '&#128077;'
    }
]
