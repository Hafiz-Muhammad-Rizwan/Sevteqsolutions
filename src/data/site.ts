import {
  Capability,
  Industry,
  Insight,
  Metric,
  NavItem,
} from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/#contact" },
];

export const capabilities: Capability[] = [
  {
    title: "Native & Cross-Platform Mobile Development",
    description: "Crafting high-performance, fluid mobile applications using Flutter and React Native. We focus on stunning UI execution, offline-first architectures, and cross-platform native performance for iOS and Android.",
  },
  {
    title: "Full-Stack Web Ecosystems",
    description: "Building responsive, ultra-fast web applications using robust modern architectures like React, Node.js, and Spring Boot. Clean code designed for performance and scale.",
  },
  {
    title: "Autonomous AI Agents & Automation",
    description: "Integrating intelligent AI workflows directly into your business logic. We design custom AI agents, fine-tune custom LLM pipelines, and automate manual business operations to supercharge productivity.",
  },
  {
    title: "Cloud Architecture & DevOps Infrastructure",
    description: "Migrate and scale with complete confidence. We architect secure AWS cloud environments, implement Docker containerization, and build automated GitLab CI/CD pipelines to ensure 99.9% uptime and zero-downtime deployments.",
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
