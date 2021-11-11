const products = [
  {
    name: "Cactus Summer Splash",
    price: 464.44,
    description:
      "There’s something about their very own watch that gives children a sense of independence, maturity and accountability. That’s all well and good for us grown ups, but they want something that looks great that they can show off to their friends too, right? Cactus watches are all about style, quality and design, as well as being colourful, fun, and imaginative!",
    image: "https://i.ibb.co/gdkYrQB/2.jpg",
    brand: "Maserati",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Bering Rose Gold Steel Mesh",
    price: 380.78,
    description:
      "This Bering Women’s watch features a rose gold tone dial with rose gold tone hands, fixed rose gold tone stainless steel bezel and a rose gold tone stainless steel case with a rose gold tone stainless steel mesh bracelet. Quartz movement with analog display. Round case shape with a 22 mm case diameter. Scratch resistant sapphire crystal. Solid case back. Functions: Hour, Minute. Water resistance up to 30 meters.",
    image: "https://i.ibb.co/ggCtt5H/3.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Bering Titanium Sunray Orange",
    price: 101.89,
    description:
      "Bering Men's 11739-879 Watch Classic Brushed Silver Titanium Gray Sunray Dial Orange Accents. Ultra-light and ultra-elegant. The Titanium Collection by BERING for men.",
    image: "https://i.ibb.co/ZdxdJZP/4.jpg",
    brand: "Maserati",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Cluse La Boheme",
    price: 156.38,
    description:
      "A gorgeous gift set combining the iconic Boho Chic watch in the colour rose gold and black, with an additional black mesh strap. Our watch straps are easily interchangeable, so you can customise the stainless steel case to match your mood. Style your day in elegant rose gold, or switch to the fashionable black mesh strap. Presented in a modern geometric pattern gift box.",
    image: "https://i.ibb.co/7r6p420/5.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Cluse Minuit",
    price: 221.22,
    description:
      "Our Minuit collection pays tribute to starry nights and elegant evening looks. The delicate design of this featherlight watch makes it the perfect accessory for a fashionable, yet subtle result. The watch features a 33 mm case, where rose gold is combined with a modern sunray dial and silver stainless steel mesh strap. The strap can be easily interchanged, with every 16 mm CLUSE watch strap, allowing you to personalise your watch.",
    image: "https://i.ibb.co/y4ynyqp/6.jpg",
    brand: "Fossil",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Esprit Kyla 2 Tone",
    price: 344.91,
    description:
      "Two Tone Silver & Rose Gold Color Case, Silver Dial, Two Tone Silver & Rose Gold Color Stainless Steel Metal Bracelet, 3 Hands, 5 ATM",
    image: "https://i.ibb.co/VDC95GR/7.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Fossil 3 Hand Sports",
    price: 381.94,
    description:
      "Fossil Privateer Sport Three-Hand Date Gold-Tone Stainless Steel Watch BQ2321 is a great watch with classic style",
    image: "https://i.ibb.co/brzrzBg/8.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Fossil Townsman Men’s Watch – ME3105",
    price: 391.59,
    description:
      "The top-of-the-hour Townsman automatic takes its cues from vintage designs. Included with our up-to-the-minute innovation? A refined rose gold-tone case houses a clear crystal lens and the precise inner workings of the watch.",
    image: "https://i.ibb.co/6sHxsLC/9.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "G-Shock Digital",
    price: 110.5,
    description:
      "Indulge your passionate side and stargaze with a G-STEEL inspired by Mars. The GSTB400MV bezel comes in reddish copper to evoke the hue of Mars. Connect to your smartphone via Bluetooth® and the dedicated G-SHOCK CONNECTED app coordinates with Internet timeservers to keep you on time, wherever you are in the world.",
    image: "https://i.ibb.co/WBdmTmW/10.jpg",
    brand: "Castus Fiesta",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Lorus Youth Coloured Numbers",
    price: 230.55,
    description:
      "Sporty Lorus kids watch RRX83GX9 . In the colors Dial: Blue, Bracelet: Blue, Case: Silver. For a high wearing comfort provides the high-quality bracelet made of silicone. The specified test pressure (water resistance) is 10 atm, and ensures a good everyday suitability. A scratch-resistant hardened, mineral glass protects your new dream watch largely from accidental scratches and bruises.",
    image:
      "https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/p3-450x450.jpg",
    brand: "Fossil",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
  {
    name: "Paul Hewitt Miss Ocean Line",
    price: 318.56,
    description:
      "Elegant, sensual, and true to the beauty and legends of the world’s oceans: this is the new Miss Ocean watch. As the member of our fleet, it represents the fascinating and endless vastness of the world’s oceans and embodies a unique and modern style. It’s a piece that is perfect for women who feel at home in the city or out on the sea.",
    image:
      "https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2018/10/52-1-1-450x450.jpg",
    brand: "Daniel Wellington",
    feature: [
      "Imported, The watch has a highly scratch-resistant",
      "Water resistant up to 3 ATM / 30 meters / 98 feet | General resistance to rain, splashing, accidental submersion and showering.",
      "Not suitable for swimming or bathing",
      "The strap is made from pure lether.",
      "The straps length is 180MM and the width is 16MM",
    ],
  },
];

module.exports = products;
