function displayFruit(fruitName) {
    var image = document.getElementById('fruit-image');
    var description = document.getElementById('fruit-description');

    if (fruitName === 'Mango') {
        image.src = 'mango.jpg';
        description.textContent = 'Mango is a tropical fruit prized for its sweet and juicy flesh, vibrant color, and rich flavor profile. It comes in various shapes, sizes, and colors, ranging from green to yellow, orange, and red when ripe. Mangoes are rich in vitamins A, C, and E, as well as dietary fiber and antioxidants. They are commonly eaten fresh, sliced, or blended into smoothies. Mangoes are also used in salads, salsas, chutneys, desserts, and juices.';
    } else if (fruitName === 'Coconut') {
        image.src = 'coconut.jpg';
        description.textContent = 'Coconut is a versatile tropical fruit known for its hard outer shell, fibrous husk, and creamy white flesh. It is rich in healthy fats, vitamins, and minerals, including potassium, manganese, and copper. Coconut can be enjoyed in various forms, such as fresh coconut water, coconut milk, coconut oil, and shredded coconut meat. It is used in both sweet and savory dishes, including curries, desserts, baked goods, and beverages.';
    } else if (fruitName === 'Pineapple') {
        image.src = 'pineapple.jpg';
        description.textContent = 'Pineapple is a tropical fruit recognized for its spiky outer skin, sweet and tangy flavor, and juicy yellow flesh. It is rich in vitamin C, manganese, and bromelain, an enzyme that aids in digestion and has anti-inflammatory properties. Pineapple can be eaten fresh, sliced, or grilled. It is also used in fruit salads, smoothies, juices, desserts, and savory dishes like stir-fries and salsas.';
    } else if (fruitName === 'Papaya') {
        image.src = 'papaya.jpg';
        description.textContent = 'Papaya is a tropical fruit known for its vibrant orange flesh and sweet, musky flavor. It is rich in vitamins A, C, and E, as well as folate and potassium. Papaya is often eaten fresh, added to fruit salads, or blended into smoothies. It contains an enzyme called papain, which aids in digestion and is often used as a meat tenderizer in cooking.';
    } else if (fruitName === 'Santol') {
        image.src = 'santol.jpg';
        description.textContent = 'Santol, also known as wild mangosteen, is a tropical fruit native to Southeast Asia. It has a thick, yellow skin and white, juicy flesh with a sweet and sour taste. Santol is often eaten fresh or used in preserves, jams, and desserts. It is rich in vitamin C and is believed to have various health benefits, including improving digestion and boosting the immune system.';
    } else if (fruitName === 'Rambutan') {
        image.src = 'rambutan.jpg';
        description.textContent = 'Rambutan is a tropical fruit closely related to lychee and longan. It has a hairy red or yellow skin and sweet, translucent flesh surrounding a large seed. Rambutan is commonly eaten fresh as a snack or added to fruit salads and desserts. It is rich in vitamin C and antioxidants, making it beneficial for skin health and immune function.';
    } else if (fruitName === 'Mangosteen') {
        image.src = 'mangosteen.jpg';
        description.textContent = 'Mangosteen is a tropical fruit known for its purple outer skin and sweet, tangy flesh. It is often referred to as the "queen of fruits" for its delicious flavor and nutritional benefits. Mangosteen is rich in antioxidants called xanthones, which have anti-inflammatory and immune-boosting properties. It is commonly eaten fresh or used in juices, smoothies, and desserts.';
    } else if (fruitName === 'Banana') {
        image.src = 'banana.jpg';
        description.textContent = 'Banana is a popular tropical fruit with a soft, creamy texture and sweet flavor. It is rich in potassium, vitamins, and fiber, making it a nutritious snack choice. Bananas can be eaten fresh, added to smoothies, baked into bread and muffins, or sliced and served with yogurt or cereal. They are also a convenient source of energy for athletes and active individuals.';
    } else if (fruitName === 'Dragon Fruit') {
        image.src = 'dragon.jpg';
        description.textContent = 'Dragon fruit, also known as pitaya, is a tropical fruit with a vibrant pink or yellow skin and speckled flesh containing tiny black seeds. It has a mild, slightly sweet flavor reminiscent of a cross between a kiwi and a pear. Dragon fruit is low in calories and rich in vitamin C, antioxidants, and fiber. It is commonly eaten fresh, added to fruit salads, or blended into smoothies.';
    } else if (fruitName === 'Guava') {
        image.src = 'guava.jpg';
        description.textContent = 'Guava is a tropical fruit with green or yellow skin and sweet, juicy flesh containing small seeds. It has a fragrant aroma and a flavor that ranges from sweet to slightly tart. Guava is rich in vitamin C, fiber, and antioxidants, making it beneficial for immune health and digestion. It can be eaten fresh, juiced, or used in jams, jellies, and desserts.';
    } 
    // Add more else-if statements for other fruits
}