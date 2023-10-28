import { Chance } from 'chance';

const chance = new Chance();

export const vrDummies: VR[] = [
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 1,
        isAvailable: true,
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 2,   
        isAvailable: true,   
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 3,      
        isAvailable: true,
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 4,    
        isAvailable: false,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 5,    
        isAvailable: false,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 6,
        isAvailable: true,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 7,    
        isAvailable: true,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 8,      
        isAvailable: false,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 9,      
        isAvailable: true,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 10,   
        isAvailable: true,    
    },    
];

export const tabletDummies: Tablet[] = [
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 1,
        isAvailable: true,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 2,    
        isAvailable: true,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 3,    
        isAvailable: true,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 4,    
        isAvailable: false,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 5,      
        isAvailable: true,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 6,
        isAvailable: false,  
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 7, 
        isAvailable: true,       
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 8,    
        isAvailable: true,    
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 9,   
        isAvailable: true,     
    },
    {
        SKU: chance.integer({ min: 1000, max: 9999 }),
        itemNumber: 10,   
        isAvailable: false,     
    }
]

export const lecetureRoomDummies: LectureRoom[] = [
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: false
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: false
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: false
    },
    {
        name: chance.name(),
        desc: 'Lorem Ipsum is',
        isAvailable: true
    }
]