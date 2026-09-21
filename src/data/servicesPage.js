import { 
  Target,
  ShieldCheck,
  Users,
  LineChart
} from 'lucide-react';

import imgAssurance from '../assets/images/services/audit-assurance.jpg';
import imgTax from '../assets/images/services/tax.jpg';
import imgAdvisory from '../assets/images/services/strategic-consulting.jpg';
import imgController from '../assets/images/services/financial-advisory.jpg';

export const servicesHero = {
  title: "OUR SERVICES",
  heading: "Expertise that supports every stage of your business.",
  description: "At V. K. Umbarkar & Co., we bring together professional services designed to support compliance, financial visibility, operational controls and business decision-making."
};

export const coreServices = [
  {
    id: 1,
    number: "01",
    title: "Assurance",
    subtitle: "Stronger Governance",
    description: "Audit and assurance services that support financial reporting, regulatory requirements and internal control processes.",
    detailedDescription: "Audit is not simply an exercise in reviewing financial information. It is an opportunity to understand processes, assess controls and identify areas that require attention. At VKU, our assurance capabilities support organisations across statutory, internal, concurrent, revenue and stock audits, alongside systems and process audit assignments.",
    image: imgAssurance,
    capabilities: [
      "Statutory Audit",
      "Internal Audit",
      "Concurrent Audit",
      "Revenue Audit",
      "Stock Audit",
      "Systems & Process Audit"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Tax & Regulatory Compliance",
    subtitle: "Smarter Compliance",
    description: "Helping businesses navigate taxation and regulatory requirements through professional support and practical processes.",
    detailedDescription: "Tax compliance is not only about meeting deadlines. It requires accurate data, organised documentation and a clear understanding of applicable provisions. Our tax and regulatory compliance capabilities support businesses through their GST, income tax, profession tax and corporate law requirements.",
    image: imgTax,
    capabilities: [
      "GST",
      "Direct Tax & Income Tax",
      "Profession Tax",
      "Corporate Law Compliances",
      "Taxation Advisory"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Advisory",
    subtitle: "Better Decisions",
    description: "Financial and business advisory support to help organisations assess processes, understand financial considerations and address business requirements.",
    detailedDescription: "Every business decision has financial implications. Whether you are reviewing a process, evaluating funding requirements or seeking management support, the quality of your financial information matters. Our advisory services bring together management consulting, business process review, taxation advisory, corporate advisory and project finance expertise.",
    image: imgAdvisory,
    capabilities: [
      "Business Process Review (BPR)",
      "Management Consulting",
      "Corporate Advisory",
      "Taxation Advisory",
      "Project Finance",
      "Working Capital Finance"
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Controller-as-a-Service",
    subtitle: "Greater Financial Clarity",
    description: "Finance operations and reporting support for businesses seeking structured financial management.",
    detailedDescription: "A growing business needs more than accounting records. It needs timely reporting, organised finance operations and visibility into its financial position. Our Controller-as-a-Service and Virtual CFO offering covers accounting, payroll, MIS and compliance management, helping businesses access structured finance support.",
    image: imgController,
    capabilities: [
      "Accounting",
      "Payroll",
      "MIS & Reporting",
      "Compliance Management",
      "Virtual CFO Support"
    ]
  }
];

export const whyChooseServices = [
  {
    icon: ShieldCheck,
    title: "Professional Integrity",
    description: "We maintain the highest standards of ethical conduct, confidentiality, and professional independence.",
    color: "text-vku-primary",
    bg: "bg-blue-50"
  },
  {
    icon: Target,
    title: "Practical Understanding",
    description: "We focus on understanding the financial and operational context behind your business requirements.",
    color: "text-vku-orange",
    bg: "bg-orange-50"
  },
  {
    icon: Users,
    title: "Partner-led Practice",
    description: "A practice supported by seven partners and a team of professionals with diverse expertise.",
    color: "text-vku-green",
    bg: "bg-green-50"
  }
];

export const servicesCta = {
  title: "Let's talk about your business requirements.",
  description: "Whether you are looking for audit support, tax compliance, business advisory or finance operations support, our team is ready to help.",
  buttonText: "Contact Us",
  buttonLink: "/contact"
};
