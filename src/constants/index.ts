/**
 * Types
 */
import type { MenuItem } from "@/types";

/**
 * Assets
 */
import {
  Blocks,
  Terminal,
  LaptopMinimal,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  LayoutDashboard,
  Lock,
  Fingerprint,
  Shield,
  BrainCircuit,
  Bell,
  Smartphone,
} from "lucide-react";

import { blog1, blog2, blog3, avatar1, avatar2, avatar3 } from "@/assets";

// Header
export const navMenu: MenuItem[] = [
  {
    href: "/features",
    label: "Features",
    submenu: [
      {
        href: "#",
        icon: Lock,
        label: "Secure Storage",
        desc: "End-to-end encrypted password storage with zero-knowledge architecture",
      },
      {
        href: "#",
        icon: Fingerprint,
        label: "Biometric Approval",
        desc: "Approve login requests with fingerprint or face ID for enhanced security",
      },
      {
        href: "#",
        icon: BrainCircuit,
        label: "AI Password Analysis",
        desc: "Smart password strength evaluation and intelligent suggestion system",
      },
      {
        href: "#",
        icon: Shield,
        label: "Auto-Fill Protection",
        desc: "Secure form detection and automated password filling across all sites",
      },
    ],
  },
  {
    href: "/integrations",
    label: "Integrations",
  },
  {
    href: "/docs",
    label: "Docs",
    submenu: [
      {
        href: "#",
        icon: Terminal,
        label: "Getting Started",
        desc: "Quick guide to install the extension and set up your secure vault",
      },
      {
        href: "#",
        icon: Smartphone,
        label: "Mobile Setup",
        desc: "Configure your mobile app for biometric approval and password management",
      },
      {
        href: "#",
        icon: LayoutDashboard,
        label: "Browser Extension",
        desc: "Detailed walkthrough of the extension features and capabilities",
      },
      {
        href: "#",
        icon: Blocks,
        label: "Integrations",
        desc: "Connect with other security tools and password management systems",
      },
    ],
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
];

// Hero
export const heroData = {
  sectionSubtitle: "Secure Password Manager",
  sectionTitle: "Frictionless logins with",
  decoTitle: "biometric security",
  sectionText:
    "Securely store and autofill passwords across all your devices with biometric verification. Our extension detects login pages, sends requests to your phone for approval, and securely autofills credentials with military-grade encryption.",
};
// Feature
export const featureData = {
  sectionSubtitle: "Features",
  sectionTitle: "Advanced Password Security Toolkit",
  sectionText:
    "Our password manager combines seamless user experience with the highest security standards, powered by AI analysis and biometric verification.",
  features: [
    {
      icon: Bell,
      iconBoxColor: "bg-blue-600",
      title: "Smart Site Detection",
      desc: "Automatically recognizes login forms and sends secure notifications to your mobile device for biometric verification",
    },
    {
      icon: Fingerprint,
      iconBoxColor: "bg-cyan-500",
      title: "Biometric Approval",
      desc: "Approve login requests with fingerprint or face ID on your mobile device before credentials are autofilled",
    },
    {
      icon: BrainCircuit,
      iconBoxColor: "bg-yellow-500",
      title: "AI Password Analysis",
      desc: "Intelligent system evaluates password strength, identifies vulnerabilities, and suggests secure alternatives",
    },
    {
      icon: Shield,
      iconBoxColor: "bg-red-500",
      title: "End-to-End Encryption",
      desc: "Your passwords never leave your devices unencrypted, with zero-knowledge architecture protecting your sensitive data",
    },
    {
      icon: Smartphone,
      iconBoxColor: "bg-purple-500",
      title: "Cross-Device Sync",
      desc: "Seamlessly access your passwords across browsers and devices while maintaining strict security protocols",
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: "How it works",
  sectionTitle: "Three Simple Steps to Secure Login",
  sectionText:
    "Experience frictionless yet highly secure logins with our straightforward authentication flow.",
  list: [
    {
      icon: LaptopMinimal,
      title: "Install & Login",
      text: "Download our browser extension and create an account. Link your mobile device for biometric verification capabilities.",
    },
    {
      icon: Bell,
      title: "Receive Login Requests",
      text: "When visiting a login page, our extension detects the site and sends a secure notification to your mobile device.",
    },
    {
      icon: Fingerprint,
      title: "Approve with Biometrics",
      text: "Verify the request on your phone with fingerprint or face ID, and watch as your credentials are securely autofilled.",
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: "Overview",
  sectionTitle: "Complete Password Protection",
  sectionText:
    "Say goodbye to weak passwords and security breaches with our comprehensive password management solution.",
  listTitle: "Empowering users with modern security capabilities",
  list: [
    {
      title: "Zero",
      text: "Knowledge Architecture",
    },
    {
      title: "100%",
      text: "Biometric Verification",
    },
    {
      title: "AI-Powered",
      text: "Password Analysis",
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: "Testimonials",
  sectionTitle: "What Our Users Are Saying",
  reviewCard: [
    {
      title: "Security Without Sacrifice",
      text: "This password manager has transformed how I handle my online accounts. The biometric approval gives me peace of mind, while the autofill makes logins effortless.",
      reviewAuthor: "Ava Thompson",
      date: "2 months ago",
    },
    {
      title: "AI Suggestions Improved My Security",
      text: "The AI password analysis identified several weak passwords I was using across multiple sites. Now I have strong, unique passwords for everything, and I don't have to remember any of them!",
      reviewAuthor: "Liam Parker",
      date: "1 month ago",
    },
    {
      title: "Perfect Balance of Security and Convenience",
      text: "I was worried biometric verification would slow me down, but it's incredibly fast. A quick fingerprint scan on my phone, and I'm logged in. The seamless experience has exceeded my expectations.",
      reviewAuthor: "Sophia Martinez",
      date: "2 weeks ago",
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: "Our Blog",
  sectionTitle: "Password Security Insights",
  sectionText:
    "Stay informed with the latest trends, tips, and updates on password security and biometric authentication.",
  blogs: [
    {
      imgSrc: blog1,
      badge: "Password Security",
      title: "Why Traditional Password Managers Fall Short in 2025",
      author: {
        avatarSrc: avatar1,
        authorName: "Alice Johnson",
        publishDate: "Mar 15, 2025",
        readingTime: "7 min read",
      },
    },
    {
      imgSrc: blog2,
      badge: "Biometric Authentication",
      title: "The Science Behind Secure Biometric Verification Systems",
      author: {
        avatarSrc: avatar2,
        authorName: "Ethan Wright",
        publishDate: "Feb 8, 2025",
        readingTime: "6 min read",
      },
    },
    {
      imgSrc: blog3,
      badge: "AI Security",
      title: "How AI Is Revolutionizing Password Management",
      author: {
        avatarSrc: avatar3,
        authorName: "Sophia Lee",
        publishDate: "Jan 22, 2025",
        readingTime: "4 min read",
      },
    },
  ],
};

// CTA
export const ctaData = {
  text: "Secure your online accounts with biometric protection today!",
};

// Footer
export const footerData = {
  links: [
    {
      title: "Product",
      items: [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Documentation" },
        { href: "#", label: "Browser Extensions" },
      ],
    },
    {
      title: "Developers",
      items: [
        { href: "#", label: "Getting Started" },
        { href: "#", label: "API Documentation" },
        { href: "#", label: "Support" },
        { href: "#", label: "Integration Guides" },
        { href: "#", label: "Release Notes" },
      ],
    },
    {
      title: "Company",
      items: [
        { href: "#", label: "About" },
        { href: "#", label: "Careers" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Data Protection Policy" },
        { href: "#", label: "Cookie Settings" },
      ],
    },
  ],
  copyright: "© 2025 Syntax Squad",
  socialLinks: [
    { href: "#", icon: Twitter },
    { href: "#", icon: Github },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Instagram },
    { href: "#", icon: Youtube },
  ],
};
