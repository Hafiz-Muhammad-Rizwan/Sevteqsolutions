import {
  Capability,
  Industry,
  Insight,
  Metric,
  NavItem,
} from "@/types/site";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export const capabilities: Capability[] = [
  {
    title: "Custom Software Development",
    description: "Building tailored solutions for businesses based on their unique requirements, ensuring flexibility and scalability.",
  },
  {
    title: "Web Development",
    description: "Designing and developing responsive, high-performance websites and web applications using modern frameworks.",
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform and native mobile applications (Android & iOS) with a focus on performance and UX.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually appealing user interfaces to enhance user engagement and satisfaction.",
  },
  {
    title: "Cloud Solutions",
    description: "Providing cloud-based infrastructure, deployment, and maintenance services to ensure reliability.",
  },
  {
    title: "Digital Transformation",
    description: "Helping businesses transition from traditional processes to digital systems for better efficiency.",
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
