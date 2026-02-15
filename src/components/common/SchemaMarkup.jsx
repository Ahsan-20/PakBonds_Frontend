import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PakBonds",
        "url": "https://pakbonds.com",
        "logo": "https://pakbonds.com/logo.svg",
        "sameAs": [
            "https://twitter.com/pakbonds",
            "https://facebook.com/pakbonds"
        ]
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
