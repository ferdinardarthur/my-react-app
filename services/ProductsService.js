const PRODUCTS = [
    {
        id: 100,
        name: 'Macbook Air 2019',
        price: 899,
        image: require('../assets/products/mac1.jpg'),
        description: 'Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.'
    },
    {
        id: 101,
        name: 'Macbook Air 2020',
        price: 999,
        image: require('../assets/products/mac2.jpg'),
        description: 'It’s here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency,1 M1 is not just a next step for Mac — it’s another level entirely.'
    },
    {
        id: 102,
        name: 'Macbook Pro 2019 13"',
        price: 1099,
        image: require('../assets/products/mac3.jpg'),
        description: 'The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life so you can go all day. It’s our most popular pro notebook, taken to a whole new level.'
    },
    {
        id: 103,
        name: 'Macbook Pro 2020 13"',
        price:1199,
        image: require('../assets/products/mac4.jpg'),
        description: 'Thanks to M1, the FaceTime HD camera can now take full advantage of our latest image signal processor — improving image quality in video conferences and pulling out more details in both shadows and highlights. And whether you’re running a meeting, hosting a podcast, or connecting with friends and family, new studio-quality mics will make sure everyone hears you loud and clear.'
    },
    {
        id: 104,
        name: 'Macbook Pro 2020 16"',
        price: 1299,
        image: require('../assets/products/mac5.jpg'),
        description: 'With the brilliant Retina display, images take on an incredible level of detail and realism. Text is sharp and clear. Bright LED backlighting delivers deep blacks and bright whites. P3 wide color brings even more vibrant greens and reds than sRGB. And every MacBook Pro features True Tone technology, so the white balance automatically adjusts to match the color temperature of the light around you — for a more natural viewing experience.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}