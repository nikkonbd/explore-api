const user = { id: 1, name: 'Kamal', job: 'bekar' };

// JavaScript Object Notation = JSON

const stringFiyed = JSON.stringify(user);

// console.log(user);
// console.log(stringFiyed);


const shop = {
    name: 'Alia',
    address: {
        street: 'Kachukhet 12',
        city: 'Ranvir',
        country: 'India'
    },
    products: ['laptop', 'Iphone', 'Mic', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

const shopString = JSON.stringify(shop);

// console.log(shop);
console.log(shopString);

const shopObj = JSON.parse(shopString);
console.log(shopObj);