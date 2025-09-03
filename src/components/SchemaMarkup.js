import React from 'react';

const SchemaMarkup = () => {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Taco Jesus",
    "description": "Heavenly Tacos in the Heart of Poznań - Authentic Mexican cuisine",
    "url": "https://taco-jesus-website.vercel.app",
    "telephone": "+48 123 456 789",
    "email": "info@tacojesus.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Żydowska 27/1",
      "addressLocality": "Poznań",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.4064",
      "longitude": "16.9252"
    },
    "openingHours": [
      "Mo-Su 11:00-23:00"
    ],
    "priceRange": "$$",
    "servesCuisine": "Mexican",
    "acceptsReservations": true,
    "hasMenu": "https://taco-jesus-website.vercel.app/#menu",
    "image": [
      "https://taco-jesus-website.vercel.app/assets/gallery/468728300_18252534832283507_884668673722418997_n.jpg",
      "https://taco-jesus-website.vercel.app/assets/gallery/468737891_18252533623283507_3131229477034098169_n.jpg"
    ],
    "logo": "https://taco-jesus-website.vercel.app/icons/icon-512x512.png",
    "sameAs": [
      "https://www.facebook.com/tacojesus",
      "https://www.instagram.com/tacojesus"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Anna Kowalski"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Najlepsze taco w Poznaniu! Świeże składniki i autentyczny smak Meksyku."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Piotr Nowak"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Fantastyczna atmosfera i pyszne jedzenie. Polecam burrito z wołowiną!"
      }
    ],
    "menu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Burrito",
          "description": "Tradycyjne meksykańskie burrito z różnymi nadzieniami"
        },
        {
          "@type": "MenuSection",
          "name": "Quesadilla",
          "description": "Chrupiące quesadilla z serem i mięsem"
        },
        {
          "@type": "MenuSection",
          "name": "Salsy",
          "description": "Ostre i łagodne sosy meksykańskie"
        },
        {
          "@type": "MenuSection",
          "name": "Napoje",
          "description": "Tradycyjne meksykańskie napoje"
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "Darmowa dostawa przy zamówieniu powyżej 50 zł",
      "price": "0",
      "priceCurrency": "PLN"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Taco Jesus",
    "description": "Mexican Restaurant in Poznań",
    "url": "https://taco-jesus-website.vercel.app",
    "telephone": "+48 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Żydowska 27/1",
      "addressLocality": "Poznań",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.4064",
      "longitude": "16.9252"
    },
    "openingHours": [
      "Mo-Su 11:00-23:00"
    ],
    "priceRange": "$$",
    "image": "https://taco-jesus-website.vercel.app/icons/icon-512x512.png"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taco Jesus",
    "url": "https://taco-jesus-website.vercel.app",
    "logo": "https://taco-jesus-website.vercel.app/icons/icon-512x512.png",
    "description": "Mexican Restaurant in Poznań",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Żydowska 27/1",
      "addressLocality": "Poznań",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48 123 456 789",
      "contactType": "customer service",
      "availableLanguage": ["Polish", "English", "Ukrainian"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
};

export default SchemaMarkup;
