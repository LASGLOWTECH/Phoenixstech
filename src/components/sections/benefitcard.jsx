import React from "react";
import { useTranslation } from "react-i18next";
import useAOS from "../../hooks/useAos";

const BenefitsGrid = ({ sectionTitle, sectionsubtitle, highlightedWords, benefits }) => {
  const { AOS } = useAOS();
  const { t } = useTranslation();

  // Split sectionTitle around highlightedWords (translated)
  // We need to translate the full sectionTitle and highlightedWords before splitting
  const fullTitle = t(sectionTitle);
  const highlight = t(highlightedWords);

  const [before = "", mid = "", after = ""] = fullTitle.split(new RegExp(`(${highlight})`, "i"));

  return (
    <section className="py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up" data-aos-duration="1000">
       {before}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-Secondarycolor to-Secondarycolor1">
            {mid}
          </span>
          {after}
        </h2>

        <p className="text-gray-600 leading-relaxed text-base text-left">
          {t(sectionsubtitle)}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow text-left ${benefit.color}`}
              data-aos="zoom-out"
              data-aos-duration="3000"
            >
              <h4 className="font-semibold text-2xl mb-2">{t(benefit.title)}</h4>
              <p className="text-sm text-gray-700">{t(benefit.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
