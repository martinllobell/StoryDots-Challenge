const brandsJson = [
    {
        name: "Razer",
        logo_url: "https://w7.pngwing.com/pngs/498/738/png-transparent-razer-inc-logo-others-text-logo-vertebrate.png"
    },
    {
        name: "Logitech",
        logo_url: "https://logodownload.org/wp-content/uploads/2018/03/logitech-logo-01.png"
    }
];

const productsJson = [
    {
        name: "Basilisk V3 Pro",
        description: "The king returns to raise the game. Enter the Razer Basilisk V3 Pro—our most advanced gaming mouse yet. Armed to the teeth with industry-leading technology, unlock your maximum potential with a weapon that pushes the known limits of performance, customization, connectivity, and control.",
        image_url: "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-9961016.png",
        price: 5000.10,
        BrandId: 1
    },
    {
        name: "Viper Mini Signature Edition",
        description: "Your dream mouse has just been surpassed. For those who dare to want it all, arm yourself with a masterpiece that outclasses the competition in weight, design, and performance. Introducing the Razer Viper Mini Signature Edition—the best lightweight performance gaming mouse ever created.",
        image_url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Frazer-viper-mini-signature-edition-lightest-ever-gaming-mouse-info-000.jpg?w=960&cbr=1&q=90&fit=max",
        price: 7000.20,
        BrandId: 1
    },
    {
        name: "DeathAdder V3 Pro",
        description: "Victory takes on a new shape with the Razer DeathAdder V3 Pro. Refined and reforged with the aid of top esports pros, its iconic ergonomic form is now more than 25% lighter than its predecessor, backed by a set of cutting-edge upgrades to push the limits of competitive play.",
        image_url: "https://i.rtings.com/assets/products/XZTWfCaG/razer-deathadder-v3-pro/design-large.jpg",
        price: 5000.30,
        BrandId: 1
    },
    {
        name: "Blackwidow V4 Pro",
        description: "Empower your play with a centerpiece that elevates your entire setup. Enter the next phase of battlestation evolution with the ultimate mechanical gaming keyboard. Take full command with a set of features designed for advanced control, and enhance your immersion with full-blown Razer Chroma™ RGB.",
        image_url: "https://i.rtings.com/assets/products/MMgt3UYQ/razer-blackwidow-v4-pro/design-medium.jpg",
        price: 12000.40,
        BrandId: 1
    },
    {
        name: "Deathstalker V2 Pro",
        description: "Meet the Razer DeathStalker V2 Pro—a wireless ultra-slim optical keyboard optimized for top-tier performance and durability. Featuring new low-profile switches and Razer™ HyperSpeed Wireless for ultra-responsive gaming, all housed within a durable, ultra-slim casing for long-lasting ergonomic use.",
        image_url: "https://cdn.mos.cms.futurecdn.net/cwQWRHnezpyRMK5vtzR2E3-1200-80.jpg",
        price: 10000.50,
        BrandId: 1
    },
    {
        name: "Huntsman V2 Analog",
        description: "Enter a higher dimension of control with the Razer Huntsman V2 Analog—our first analog optical gaming keyboard. Armed with every feature you’d expect from a top-of-the-line design, you’ll want for nothing in your pursuit of victory.",
        image_url: "https://freakelitex.com/wp-content/uploads/2021/02/Razer-Huntsman-V2-Analog.jpg",
        price: 15000.60,
        BrandId: 1
    },
    {
        name: "Huntsman V2 Tenkeyless",
        description: "Unrivalled responsiveness has never looked this lean. Meet the Razer Huntsman V2 TKL—a tenkeyless optical gaming keyboard with improved acoustics, near-zero input latency, and other high-end features to ensure a compact form factor geared for full-sized performance.",
        image_url: "https://app.contabilium.com/files/explorer/16752/Productos-Servicios/concepto-7670587.png",
        price: 12500.70,
        BrandId: 1
    },
    {
        name: "Ornata V3",
        description: "Meet the Razer Ornata V3—a low-profile ergonomic gaming keyboard powered by Razer Chroma™ RGB. Sporting a new ultra-slim form factor, more durable keycaps, and unique mecha-membrane switches, enhance your work and play with a hybrid keyboard that combines the best of both worlds.",
        image_url: "https://assets2.razerzone.com/images/pnx.assets/fdf0065feb0fc548f3631a3af85e29fe/parallax-scrolling-mobile-1.jpg",
        price: 11000.80,
        BrandId: 1
    },
    {
        name: "G604 LIGHTSPEED",
        description: "G604 delivers versatility and high performance with endless possibilities. Master your arsenal in tactical game genres like Battle Royale, MMO, and MOBA.",
        image_url: "https://bangho.vtexassets.com/arquivos/ids/159953/logitech-g604-lightspeed--1-.png?v=637559913886500000",
        price: 4000.90,
        BrandId: 2
    },
    {
        name: "G PRO WIRELESS GAMING",
        description: "Logitech G collaborated with more than 50 professional gamers to decide the perfect shape, weight, and feel to pair with our HERO 25K sensor and wireless LIGHTSPEED technologies. The result is that it is one of the most popular mice in esports.",
        image_url: "https://logitechar.vtexassets.com/arquivos/ids/158874-800-800?v=637922945335770000&width=800&height=800&aspect=true",
        price: 5500.99,
        BrandId: 2
    },
    {
        name: "K650 SIGNATURE",
        description: "SIGNATURE K650 Wireless keyboard, equipped for daily work and comfort.",
        image_url: "https://logitechar.vtexassets.com/arquivos/ids/158981-800-800?v=638161373043830000&width=800&height=800&aspect=true",
        price: 9000.01,
        BrandId: 2
    },
    {
        name: "G733 GAMING HEADPHONES",
        description: "Logitech G733 wireless gaming headset with suspension headband, LIGHTSPEED, LIGHTSYNC RGB, Blue VO!CE microphone technology and PROG audio drivers",
        image_url: "https://logitechar.vtexassets.com/arquivos/ids/157596-800-800?v=637358693320070000&width=800&height=800&aspect=true",
        price: 12500.02,
        BrandId: 2
    },
];

module.exports = {
    productsJson,
    brandsJson
};