const SchemaMarkup = () => {
  return (
    <script type='application/ld+json'>
      {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HamsterPOS",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Beirut",
              "addressCountry": "Lebanon"
            },
            "telephone": "+961-1-123456",
            "url": "https://hamsterpos.com"
          }
        `}
    </script>
  )
}

export default SchemaMarkup
