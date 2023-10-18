import React from "react";
import { Helmet } from "react-helmet";

interface SectionComponentProps {
  title: string;
  content: React.ReactNode; // Corrigindo o tipo da propriedade 'content'
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  title,
  content,
}) => {
  return (
    <section className="my-20 relative min-h-screen">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* Conteúdo específico da seção */}
      <div className="form-container absolute inset-x-1/4">{content}</div>
    </section>
  );
};

export default SectionComponent;
