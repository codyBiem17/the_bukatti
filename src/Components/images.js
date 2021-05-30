import banner1 from '../assets/images/banner1.jpg'
import reserved_table from '../assets/images/table_service.jfif'
import tastyFood from '../assets/images/tastyfood.jfif'
import foodOrder from '../assets/images/food-order2.png'
import dish from '../assets/images/image.png'
import reserved from '../assets/images/reserved.png'
import delivery from '../assets/images/food-agent.png'
import Jelof from '../assets/images/jollof_rice_dodo.jpg'
import VegSoup from '../assets/images/veg-soup.jpg'
import IceCream from '../assets/images/ice-cream-dessert.jpg'
import PetCoke from '../assets/images/coke-pet-trans.png'
import CanCoke from '../assets/images/coca-cola-can.jpg'
import Chapman from '../assets/images/cocktail.jpg'
import ChiExotic from '../assets/images/chi-exotic.jpg'
import Customer from '../assets/images/person-eating.jpg'

export const heroImages = [
    {
        src: tastyFood,
        header: 'Try our Specials',
        caption: "",
        altText: 'tastyFood'
    },
    {
        src: reserved_table,
        header: 'Reserve A Table',
        caption: "",
        altText: 'reserved_table'
    },
    {
        src: banner1,
        header: 'Home-made Meals',
        caption: "",
        altText: 'banner1'
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
        id: 5,
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
        id: 6,
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


export const mainFoodMenu = [

    {
        category: 'Breakfast',
        foodItem:[
            {
                foodType: 'Food-Combo-Drink',
                foodDetails:[
                    {
                        id: 1,
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
                ]
            },

            {
                foodType: 'Food-Only',
                foodDetails:[
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
                        foodImg: {
                            src: Jelof,
                            altText: 'jelof-rice'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Desserts',
                foodDetails:[
                    {
                        id: 1,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Soups',
                foodDetails:[
                    {
                        id: 1,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Drinks & Beverages',
                foodDetails:[
                    {
                        id: 1,
                        drinkImg: {
                            src: Chapman,
                            altText: 'chapman-drink'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        drinkImg: {
                            src: CanCoke,
                            altText: 'cancoke'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            }
        ]
    },

    {
        category: 'Lunch',
        foodItem:[
            {
                foodType: 'Food-Combo-Drink',
                foodDetails:[
                    {
                        id: 1,
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
                ]
            },

            {
                foodType: 'Food-Only',
                foodDetails:[
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
                        foodImg: {
                            src: Jelof,
                            altText: 'jelof-rice'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Desserts',
                foodDetails:[
                    {
                        id: 1,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        foodImg: {
                            src: IceCream,
                            altText: 'ice-cream'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Soups',
                foodDetails:[
                    {
                        id: 1,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Drinks & Beverages',
                foodDetails:[
                    {
                        id: 1,
                        drinkImg: {
                            src: Chapman,
                            altText: 'chapman-drink'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        drinkImg: {
                            src: CanCoke,
                            altText: 'cancoke'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            }
        ]
    },

    {
        category: 'Dinner',
        foodItem:[
            {
                foodType: 'Food-Combo-Drink',
                foodDetails:[
                    {
                        id: 1,
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
                ]
            },

            {
                foodType: 'Food-Only',
                foodDetails:[
                    {
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
                        id: 4,
                        foodImg: {
                            src: Jelof,
                            altText: 'jelof-rice'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Soups',
                foodDetails:[
                    {
                        id: 1,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        foodImg: {
                            src: VegSoup,
                            altText: 'vegetable-soup'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            },

            {
                foodType: 'Drinks & Beverages',
                foodDetails:[
                    {
                        id: 1,
                        drinkImg: {
                            src: Chapman,
                            altText: 'chapman-drink'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 2,
                        drinkImg: {
                            src: CanCoke,
                            altText: 'cancoke'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 3,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                    {
                        id: 4,
                        drinkImg: {
                            src: ChiExotic,
                            altText: 'chiexotic'
                        },
                        plus: '&#43;',
                        foodItemName: 'Lorem Ipsum yenyen',
                        foodItemMakeUp: 'Bla de bla, bla de bla',
                        amount: '&#8358;500',
                    },
                ]
            }
        ]  
    },
]