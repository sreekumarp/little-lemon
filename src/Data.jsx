import slideImg1 from "./assets/g1.jpg";
import slideImg2 from "./assets/g2.jpg";
import slideImg3 from "./assets/g3.jpg";

import featureImg1 from "./assets/food.svg";
import featureImg2 from "./assets/chef.svg";
import featureImg3 from "./assets/money.svg";
import featureImg4 from "./assets/menu.svg";

import galleryImg1 from "./assets/g1.jpg";
import galleryImg2 from "./assets/g2.jpg";
import galleryImg3 from "./assets/g3.jpg";

import testimonialImg1 from "./assets/testimonial-1.jpg";
import testimonialImg2 from "./assets/testimonial-2.jpg";
import testimonialImg3 from "./assets/testimonial-3.jpg";
import testimonialImg4 from "./assets/testimonial-4.jpg";

import menuImg1 from "./assets/menu-1.jpg";
import menuImg2 from "./assets/menu-two.jpg";
import menuImg3 from "./assets/menu-three.jpg";
import menuImg4 from "./assets/menu-four.jpg";

export const navLinks = ["home", "about", "menu", "gallery", "testimonials"];

export const homeSlide = [
  {
    img: slideImg1,
    title: "Your Favorite",
    description:
      "Discover vibrant Mediterranean dishes made fresh daily with local ingredients and authentic flavors.",
  },

  {
    img: slideImg2,
    title: "Experience Authentic ",
    description:
      "Relax and enjoy house-made recipes inspired by classic Mediterranean cooking, served in a warm, cozy atmosphere.",
  },

  {
    img: slideImg3,
    title: "Enjoy Our Chef’s Special Dishes Today",
    description:
      "Join us for lunch, dinner, or dessert — there’s always something delicious to enjoy at Little Lemon.",
  },
];

export const featureItem = [
  {
    id: 1,
    img: featureImg1,
    title: "Fresh Testy Meals",
    description:
      "We serve fresh, local ingredients and bold flavors you will love every time.",
  },

  {
    id: 2,
    img: featureImg2,
    title: "Experienced Chefs",
    description:
      "Our chefs have years of experience and a passion for creating delicious dishes.",
  },

  {
    id: 3,
    img: featureImg3,
    title: "Affordable Price",
    description: "Enjoy delicious meals and fair prices that fit any budget.",
  },

  {
    id: 4,
    img: featureImg4,
    title: "Daily Fresh Menu",
    description:
      "We offer a daily fresh menu that highlights seasonal ingredients and bold flavors.",
  },
];

export const gallery = [galleryImg1, galleryImg2, galleryImg3];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: "Aria Benson",
    description:
      "The atmosphere here is so warm and inviting. The food is always fresh and delicious, and the staff is incredibly friendly.",
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: "Omar Patel",
    description:
      "The food here is absolutely amazing! I love the variety and the quality of the ingredients. Every dish is a delight to the senses.",
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: "Zoe Kim",
    description:
      "I’ve been coming here for months and it never disappoints. The seasonal menu keeps things interesting.",
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: "Maya Rivera",
    description:
      "The flavors here remind me of home cooking but with a special twist. I always leave satisfied and happy!",
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    category: "Dinner",
    title: "Truffle Mushroom Risotto",
    description: "Creamy Arborio rice cooked with wild mushrooms, white truffle oil, and Parmesan cheese.",
    price: 24.99,
    reviews: 1850,
    stars: 4.8,
  },
  {
    id: 2,
    img: menuImg2,
    category: "Lunch",
    title: "Avocado Shrimp Salad",
    description: "Fresh mixed greens with grilled shrimp, avocado, cherry tomatoes, and citrus vinaigrette.",
    price: 18.50,
    reviews: 2200,
    stars: 4.9,
  },
  {
    id: 3,
    img: menuImg3,
    category: "Breakfast",
    title: "Blueberry Pancake Stack",
    description: "Fluffy buttermilk pancakes loaded with fresh blueberries and served with maple syrup.",
    price: 12.75,
    reviews: 1950,
    stars: 4.7,
  },
  {
    id: 4,
    img: menuImg4,
    category: "Dinner",
    title: "Filet Mignon",
    description: "8oz premium cut beef tenderloin with red wine reduction, served with roasted vegetables.",
    price: 32.99,
    reviews: 1600,
    stars: 5.0,
  }
];

export const footerLinks = ["about", "menu", "testimonials"];
