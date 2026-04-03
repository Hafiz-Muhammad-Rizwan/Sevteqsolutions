export interface Project {
  title: string;
  client: string;
  description: string;
  image: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "custom-software",
    name: "Custom Software Development",
    description: "Enterprise-grade software systems architected for high availability and unmatched security.",
    projects: [
      {
        title: "OmniCore Enterprise ERP",
        client: "Global Logistics Corp",
        description: "A centralized operational infrastructure managing $2B in supply chain assets across 4 continents.",
        image: "/Customsoftare1.jpg",
      },
      {
        title: "FinTech Trade Automation",
        client: "Apex Financial",
        description: "Low-latency algorithmic trading platform processing 10,000+ transactions per second securely.",
        image: "/CustomeSoftware2.jpg",
      },
      {
        title: "Healthcare Data Exchange",
        client: "NovaHealth Network",
        description: "HIPAA-compliant patient data interoperability platform connecting 50+ hospital systems.",
        image: "/Customsoftare3.jpg",
      },
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Performant, scalable, and immersive web platforms that redefine user engagement.",
    projects: [
      {
        title: "Nexus E-Commerce Platform",
        client: "RetailPrime",
        description: "Headless commerce architecture enabling rapid global expansion and 40% increased conversions.",
        image: "/webDev1.jpg",
      },
      {
        title: "Quantum SaaS Dashboard",
        client: "DataSynergy",
        description: "Real-time analytics portal delivering actionable business intelligence to Fortune 500 executives.",
        image: "/webDev2.jpg",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Native and cross-platform mobile experiences designed to captivate and retain users.",
    projects: [
      {
        title: "Aura Lifestyle App",
        client: "Wellbeing Inc",
        description: "Award-winning health tracking application with personalized AI recommendations and 5M+ downloads.",
        image: "/Mobile1.jpg",
      },
      {
        title: "Velocity Ride Sharing",
        client: "Urban Mobility",
        description: "Real-time dispatch and geolocation platform handling 100,000+ daily urban commutes.",
        image: "/Mobile2.jpg",
      },
      {
        title: "Vault Secure Banking",
        client: "Meridian Trust",
        description: "Biometric-secured mobile banking solution featuring instant peer-to-peer transfers.",
        image: "/Mobile3.jpg",
      },
    ],
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    description: "Visually stunning, intuitive interfaces that bridge the gap between human and technology.",
    projects: [
      {
        title: "Lumina Experience System",
        client: "TechVision",
        description: "A comprehensive design system standardizing the user journey across 12 distinct product lines.",
        image: "/UIUXpic.jpg",
      },
      {
        title: "Horizon Interface Redesign",
        client: "Airlines Global",
        description: "Frictionless booking experience increasing flight reservations by 25% across all devices.",
        image: "/UiUX2.jpg",
      },
    ],
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Resilient cloud infrastructures built for elasticity, performance, and future growth.",
    projects: [
      {
        title: "Stratus Migration Protocol",
        client: "Enterprise Bank",
        description: "Zero-downtime migration of legacy mainframes to a hybrid AWS environments with enhanced disaster recovery.",
        image: "/Cloud1.jpg",
      },
      {
        title: "Aero Serverless Architecture",
        client: "MediaStream",
        description: "Highly scalable video encoding pipeline dynamically provisioning resources based on global demand.",
        image: "/Cloud2.jpg",
      },
      {
        title: "Titan Multi-Cloud Governance",
        client: "Defense Logistics",
        description: "Unified security and compliance framework managing assets across Azure, AWS, and GCP.",
        image: "/Cloud3.jpg",
      },
    ],
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "End-to-end modernization strategies turning legacy companies into digital-first innovators.",
    projects: [
      {
        title: "Industrial IoT Integration",
        client: "ManufacturePro",
        description: "Sensor-driven factory automation predicting machinery wear, reducing downtime by 35%.",
        image: "/Digital1.jpg",
      },
      {
        title: "Omnichannel Fulfillment",
        client: "Global Retailers",
        description: "Integrated inventory and CRM systems allowing seamless transition from physical to digital storefronts.",
        image: "/Digital2.jpg",
      },
    ],
  },
];
