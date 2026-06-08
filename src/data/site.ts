import {
  Capability,
  Industry,
  Insight,
  Metric,
  NavItem,
} from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const capabilities: Capability[] = [
  {
    title: "Workflow Automation",
    description: "Automate complex business processes to boost speed, clarity, and efficiency.",
  },
  {
    title: "Custom AI Solutions",
    description: "Build tailored AI systems that align with your business goals and challenges.",
  },
  {
    title: "AI Assistant",
    description: "Deploy intelligent virtual agents to streamline tasks.",
  },
  {
    title: "Sales & Marketing",
    description: "Optimize customer acquisition, conversion, and retention with data-driven workflows.",
  },
  {
    title: "Performance Tracking",
    description: "Monitor, visualize, and report key business metrics in real-time.",
  },
  {
    title: "Seamless Interactions",
    description: "Integrate tools, APIs, and databases for friction-free data flow.",
  },
  {
    title: "Mobile Web Development",
    description: "Crafting high-performance, responsive web applications optimized for all mobile platforms.",
  },
  {
    title: "DevOps & Cloud Automation",
    description: "Automating software delivery, deployment pipelines, and scaling secure cloud infrastructure.",
  },
];

export const industries: Industry[] = [
  {
    name: "Startups & MVPs",
    summary: "Rapid prototyping and agile development to help entrepreneurs launch tech products fast.",
  },
  {
    name: "SMEs",
    summary: "Scalable and efficient digital solutions tailored for small and medium enterprises.",
  },
  {
    name: "Enterprise Transformation",
    summary: "Seamless transition of complex, traditional enterprise processes into modern digital systems.",
  },
  {
    name: "Tech Entrepreneurs",
    summary: "Strategic technology partnerships bringing innovative products from concept to global market.",
  },
];

export const insights: Insight[] = [
  {
    category: "Thought Leadership",
    title: "How Enterprise AI Moves from Pilot to Production",
    excerpt:
      "A practical roadmap for governance, model operations, and measurable business outcomes.",
  },
  {
    category: "Transformation",
    title: "Building a Resilient Digital Core for 2030",
    excerpt:
      "Why modern architecture decisions today define tomorrow's speed, security, and agility.",
  },
  {
    category: "Cybersecurity",
    title: "Security by Design in Complex Technology Landscapes",
    excerpt:
      "An executive guide to integrating risk controls into every stage of digital delivery.",
  },
];

export const metrics: Metric[] = [
  { value: "120+", label: "Enterprise Programs Delivered" },
  { value: "14", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction Index" },
  { value: "24/7", label: "Managed Operations Support" },
];
