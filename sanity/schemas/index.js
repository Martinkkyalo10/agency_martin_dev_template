// Pages
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import servicesPage from "./servicesPage";
import blogPage from "./blogPage";
import contactPage from "./contactPage";

// Content Types
import blogPost from "./blogPost";
import caseStudy from "./caseStudy";
import client from "./client";
import author from "./author";
import category from "./category";

// Generic Page
import page from "./page";

// Objects
import seo from "./objects/seo";
import hero from "./objects/hero";
import serviceItem from "./objects/serviceItem";
import testimonialItem from "./objects/testimonialItem";
import pricingPlan from "./objects/pricingPlan";

// Blocks (optional: you may have separate schemas for these if not defined as objects)
import serviceGrid from "./objects/serviceGrid";
import testimonialCarousel from "./objects/testimonialCarousel";
import portfolioGrid from "./objects/portfolioGrid";
import pricingTable from "./objects/pricingTable";
import loginForm from "./objects/loginForm";
import registerForm from "./objects/registerForm";

export const schemaTypes = [
  // Pages
  homePage,
  aboutPage,
  servicesPage,
  blogPage,
  contactPage,
  page, // Generic page schema

  // Content Types
  blogPost,
  caseStudy,
  client,
  author,
  category,

  // Objects
  seo,
  hero,
  serviceItem,
  testimonialItem,
  pricingPlan,
  serviceGrid,
  testimonialCarousel,
  portfolioGrid,
  pricingTable,
  loginForm,
  registerForm,
];
