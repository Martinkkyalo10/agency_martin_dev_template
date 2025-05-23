const express = require("express");
const { v4: uuid } = require("uuid");
const {
  getBlogs,
  getUsers,
  getAbout,
  getHome,
  getContact,
  getServices,
  getFeatures,
  getPricingPlans,
  getPortfolio,
  getClients,
  getCategories,
} = require("./data");

const router = express.Router();

// BLOGS ROUTES
router
  .route("/blogs")
  .get((req, res) => {
    const blogs = getBlogs();
    res.json(blogs);
  })
  .post((req, res) => {
    const newBlog = {
      id: uuid(),
      ...req.body,
      createdAt: new Date(),
    };
    res.status(201).json(newBlog);
  });

router
  .route("/blogs/:id")
  .get((req, res) => {
    const blogs = getBlogs();
    const blog = blogs.find((b) => b.id === req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  })
  .put((req, res) => {
    const updatedBlog = {
      ...req.body,
      id: req.params.id,
      updatedAt: new Date(),
    };
    res.json(updatedBlog);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// USERS ROUTES
router
  .route("/users")
  .get((req, res) => {
    const users = getUsers();
    res.json(users);
  })
  .post((req, res) => {
    const newUser = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newUser);
  });

router
  .route("/users/:id")
  .get((req, res) => {
    const users = getUsers();
    const user = users.find((u) => u.id === req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  })
  .put((req, res) => {
    const updatedUser = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedUser);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// ABOUT ROUTES
router
  .route("/about")
  .get((req, res) => {
    const about = getAbout();
    res.json(about);
  })
  .put((req, res) => {
    const updatedAbout = {
      ...req.body,
      updatedAt: new Date(),
    };
    res.json(updatedAbout);
  });

// TEAM MEMBERS ROUTES
router
  .route("/about/team")
  .get((req, res) => {
    const about = getAbout();
    res.json(about.team);
  })
  .post((req, res) => {
    const newMember = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newMember);
  });

router
  .route("/about/team/:id")
  .get((req, res) => {
    const about = getAbout();
    const member = about.team.find((m) => m.id === req.params.id);
    if (!member)
      return res.status(404).json({ message: "Team member not found" });
    res.json(member);
  })
  .put((req, res) => {
    const updatedMember = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedMember);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// HOME ROUTES
router
  .route("/home")
  .get((req, res) => {
    const home = getHome();
    res.json(home);
  })
  .put((req, res) => {
    const updatedHome = {
      ...req.body,
      updatedAt: new Date(),
    };
    res.json(updatedHome);
  });

// CONTACT ROUTES
router
  .route("/contact")
  .get((req, res) => {
    const contact = getContact();
    res.json(contact);
  })
  .put((req, res) => {
    const updatedContact = {
      ...req.body,
      updatedAt: new Date(),
    };
    res.json(updatedContact);
  });

// SOCIAL LINKS ROUTES
router
  .route("/contact/socials")
  .get((req, res) => {
    const contact = getContact();
    res.json(contact.socials);
  })
  .post((req, res) => {
    const newSocial = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newSocial);
  });

router
  .route("/contact/socials/:id")
  .get((req, res) => {
    const contact = getContact();
    const social = contact.socials.find((s) => s.id === req.params.id);
    if (!social)
      return res.status(404).json({ message: "Social link not found" });
    res.json(social);
  })
  .put((req, res) => {
    const updatedSocial = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedSocial);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// SERVICES ROUTES
router
  .route("/services")
  .get((req, res) => {
    const services = getServices();
    res.json(services);
  })
  .post((req, res) => {
    const newService = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newService);
  });

router
  .route("/services/:id")
  .get((req, res) => {
    const services = getServices();
    const service = services.find((s) => s.id === req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  })
  .put((req, res) => {
    const updatedService = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedService);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// FEATURES ROUTES
router
  .route("/features")
  .get((req, res) => {
    const features = getFeatures();
    res.json(features);
  })
  .post((req, res) => {
    const newFeature = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newFeature);
  });

router
  .route("/features/:id")
  .get((req, res) => {
    const features = getFeatures();
    const feature = features.find((f) => f.id === req.params.id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.json(feature);
  })
  .put((req, res) => {
    const updatedFeature = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedFeature);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// PRICING PLANS ROUTES
router
  .route("/pricing")
  .get((req, res) => {
    const plans = getPricingPlans();
    res.json(plans);
  })
  .post((req, res) => {
    const newPlan = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newPlan);
  });

router
  .route("/pricing/:id")
  .get((req, res) => {
    const plans = getPricingPlans();
    const plan = plans.find((p) => p.id === req.params.id);
    if (!plan)
      return res.status(404).json({ message: "Pricing plan not found" });
    res.json(plan);
  })
  .put((req, res) => {
    const updatedPlan = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedPlan);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// PORTFOLIO ROUTES
router
  .route("/portfolio")
  .get((req, res) => {
    const portfolio = getPortfolio();
    res.json(portfolio);
  })
  .post((req, res) => {
    const newItem = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newItem);
  });

router
  .route("/portfolio/:id")
  .get((req, res) => {
    const portfolio = getPortfolio();
    const item = portfolio.find((p) => p.id === req.params.id);
    if (!item)
      return res.status(404).json({ message: "Portfolio item not found" });
    res.json(item);
  })
  .put((req, res) => {
    const updatedItem = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedItem);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// CLIENTS ROUTES
router
  .route("/clients")
  .get((req, res) => {
    const clients = getClients();
    res.json(clients);
  })
  .post((req, res) => {
    const newClient = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newClient);
  });

router
  .route("/clients/:id")
  .get((req, res) => {
    const clients = getClients();
    const client = clients.find((c) => c.id === req.params.id);
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.json(client);
  })
  .put((req, res) => {
    const updatedClient = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedClient);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// CATEGORIES ROUTES
router
  .route("/categories")
  .get((req, res) => {
    const categories = getCategories();
    res.json(categories);
  })
  .post((req, res) => {
    const newCategory = {
      id: uuid(),
      ...req.body,
    };
    res.status(201).json(newCategory);
  });

router
  .route("/categories/:id")
  .get((req, res) => {
    const categories = getCategories();
    const category = categories.find((c) => c.id === req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.json(category);
  })
  .put((req, res) => {
    const updatedCategory = {
      ...req.body,
      id: req.params.id,
    };
    res.json(updatedCategory);
  })
  .delete((req, res) => {
    res.status(204).send();
  });

// 404 Handler for API routes
router.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `API endpoint not found: ${req.method} ${req.originalUrl}`,
    suggestions: [
      "/api/blogs",
      "/api/users",
      "/api/about",
      "/api/home",
      "/api/contact",
      "/api/services",
      "/api/features",
      "/api/pricing",
      "/api/portfolio",
      "/api/clients",
      "/api/categories",
    ],
  });
});

// Error handling middleware
router.use((err, req, res, next) => {
  console.error("API Error:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

module.exports = router;
