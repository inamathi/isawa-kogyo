import React from "react";
import { WithContext, JobPosting } from "schema-dts";

const JsonLD = () => {
  const jobPostingLDdata: WithContext<JobPosting> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    datePosted: "2024-11-1",
    validThrough: "2025-12-31",
    employmentType: "FULL_TIME",
    title: "とび・土工工事／土木工事／舗装工事／解体工事",
    description:
      "石和工業では新たな人材を募集しています。未経験大歓迎（18歳以上）",
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        unitText: "MONTH",
      },
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "有限会社 石和工業",
      logo: "https://isawa-kogyo.com//image/img_logo-isawa-posi.svg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        postalCode: "240-0045",
        streetAddress: "保土ヶ谷区川島町 648",
        addressLocality: "横浜市",
        addressRegion: "神奈川県",
        addressCountry: "JP",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingLDdata) }}
    />
  );
};

export default JsonLD;
