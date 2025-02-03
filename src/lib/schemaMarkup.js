export const generateSchemaMarkup = (pageType, data) => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Tiidel Investment App",
      "url": "https://www.tiidel.com"
    };
  
    const schemas = {
      home: {
        ...baseSchema,
        "@type": "FinancialService",
        "description": "Tiidel Investment App - Secure platform for stocks, bonds, and mutual funds investment",
        "areaServed": "Cameroon",
        "availableLanguage": "English",
        "sameAs": [
          "https://www.facebook.com/TiidelInvestments",
          "https://twitter.com/TiidelInvest",
          "https://www.linkedin.com/company/tiidel"
        ]
      },
      invest: {
        "@context": "https://schema.org",
        "@type": "Investment",
        "name": "Tiidel Investment Options",
        "description": "Investment opportunities in stocks, bonds, and mutual funds",
        "provider": {
          "@type": "FinancialService",
          "name": "Tiidel Investment App"
        }
      },
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      },
      about: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Tiidel Investment App",
        "description": "Learn about Tiidel's mission and investment services"
      },
      contact: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Tiidel Investment Support",
        "description": "Get in touch with our investment experts"
      }
    };
  
    return schemas[pageType] || baseSchema;
  };
  
  export const SchemaMarkup = ({ pageType, data }) => {
    const schema = generateSchemaMarkup(pageType, data);
    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };