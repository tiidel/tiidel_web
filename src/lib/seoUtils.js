import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const routeSeoConfig = {
  register: {
    title: "Register | Tiidel Investment App",
    description:
      "Create your Tiidel investment account and start your journey to financial growth. Simple, secure registration process.",
    keywords:
      "register investment account, create tiidel account, investment app registration",
    ogTitle: "Register for Tiidel Investment App",
    ogDescription:
      "Start your investment journey with Tiidel. Create your account in minutes.",
    canonicalUrl: "https://www.tiidel.com/register",
  },
  login: {
    title: "Login | Tiidel Investment App",
    description:
      "Securely access your Tiidel investment portfolio. Manage your investments with ease.",
    keywords: "investment app login, tiidel login, secure investment access",
    ogTitle: "Login to Tiidel Investment App",
    ogDescription: "Access your investment portfolio securely with Tiidel.",
    canonicalUrl: "https://www.tiidel.com/login",
  },
  faq: {
    title: "FAQ | Tiidel Investment App",
    description:
      "Find answers to common questions about Tiidel investment app. Learn about our investment options, security, and more.",
    keywords:
      "investment FAQ, tiidel help, investment questions, investment guidance",
    ogTitle: "Frequently Asked Questions - Tiidel Investment App",
    ogDescription:
      "Get answers to all your investment-related questions with Tiidel.",
    canonicalUrl: "https://www.tiidel.com/faq",
  },
  invest: {
    title: "Start Investing | Tiidel Investment App",
    description:
      "Begin your investment journey with Tiidel. Explore diverse investment options including stocks, bonds, and mutual funds.",
    keywords:
      "start investing, investment options, stock investment, bond investment",
    ogTitle: "Start Investing with Tiidel",
    ogDescription:
      "Discover investment opportunities and start growing your wealth with Tiidel.",
    canonicalUrl: "https://www.tiidel.com/invest",
  },
  waitingList: {
    title: "Join Waiting List | Tiidel Investment App",
    description:
      "Be the first to know when new investment opportunities become available. Join our waiting list today.",
    keywords: "investment waiting list, early access, investment opportunities",
    ogTitle: "Join Tiidel Investment Waiting List",
    ogDescription:
      "Get early access to exclusive investment opportunities with Tiidel.",
    canonicalUrl: "https://www.tiidel.com/waiting-list",
  },
  home: {
    title: "Tiidel Investment App - Secure, Easy, and Profitable Investing",
    description:
      "Tiidel offers a secure and easy way to invest in stocks, bonds, and mutual funds. Start building your wealth today.",
    keywords:
      "investment app, stock investment, bond investment, mutual funds, secure investing",
    ogTitle: "Tiidel Investment App - Your Path to Financial Growth",
    ogDescription:
      "Start your investment journey with Tiidel. Safe, secure, and easy-to-use investment platform.",
    canonicalUrl: "https://www.tiidel.com",
  },
  about: {
    title: "About Us | Tiidel Investment App",
    description:
      "Learn about Tiidel's mission to make investing accessible to everyone. Discover our story and values.",
    keywords:
      "about tiidel, investment company, investment mission, investment values",
    ogTitle: "About Tiidel Investment App",
    ogDescription:
      "Discover how Tiidel is making investing accessible to everyone.",
    canonicalUrl: "https://www.tiidel.com/about",
  },
  contactUs: {
    title: "Contact Us | Tiidel Investment App",
    description:
      "Get in touch with Tiidel's support team. We're here to help with your investment needs.",
    keywords: "contact investment support, tiidel support, investment help",
    ogTitle: "Contact Tiidel Investment Support",
    ogDescription:
      "Reach out to our team for any investment-related queries or support.",
    canonicalUrl: "https://www.tiidel.com/contact-us",
  },
};

export const updateMetaTags = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
  noindex = false,
}) => {
  console.log("Updating meta tags====================????????", title);

  // Update title
  document.title = title;

  // Helper function to update or create meta tags
  const updateMetaTag = (selector, content, attr = "name") => {
    const tag = document.querySelector(`meta[${attr}="${selector}"]`);
    if (tag) {
      tag.setAttribute("content", content);
    } else {
      const newTag = document.createElement("meta");
      newTag.setAttribute(attr, selector);
      newTag.setAttribute("content", content);
      document.head.appendChild(newTag);
    }
  };

  // Basic meta tags
  if (description) {
    updateMetaTag("description", description);
  }
  if (keywords) {
    updateMetaTag("keywords", keywords);
  }

  // Open Graph tags
  if (ogTitle) {
    updateMetaTag("og:title", ogTitle, "property");
  }
  if (ogDescription) {
    updateMetaTag("og:description", ogDescription, "property");
  }
  if (ogImage) {
    updateMetaTag("og:image", ogImage, "property");
  }

  // Twitter tags
  if (twitterTitle) {
    updateMetaTag("twitter:title", twitterTitle);
  }
  if (twitterDescription) {
    updateMetaTag("twitter:description", twitterDescription);
  }
  if (twitterImage) {
    updateMetaTag("twitter:image", twitterImage);
  }

  // Canonical URL
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalUrl) {
    if (canonicalTag) {
      canonicalTag.setAttribute("href", canonicalUrl);
    } else {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      canonicalTag.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalTag);
    }
  }

  if (noindex) {
    updateMetaTag("robots", "noindex, nofollow");
  }
};

export const useSEO = (seoData) => {
  const location = useLocation();

  const updateSEO = useCallback(() => {
    if (seoData) {
      updateMetaTags(seoData);
    }
  }, [seoData]);

  useEffect(() => {
    updateSEO();
    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = "Tiidel Investment App";
    };
  }, [location.pathname, updateSEO]); // Re-run when route changes
};

// HOC for SEO
export const withSEO = (WrappedComponent, getMetaData) => {
  return (props) => {
    const location = useLocation();
    const seoData =
      typeof getMetaData === "function" ? getMetaData(props) : getMetaData;

    useSEO(seoData);

    return <WrappedComponent {...props} />;
  };
};
