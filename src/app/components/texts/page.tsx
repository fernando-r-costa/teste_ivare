type TextProps = {
  children: string;
  type: "label-large" | "label-short" | "error";
};

// Componente de texto reutilizável com estilos variáveis para diferentes tipos de texto, como rótulos e mensagens de erro.
const FormText: React.FC<TextProps> = ({ children, type }) => {
  switch (type) {
    case "label-large":
      return <label className="text-2xl font-semibold">{children}</label>;
    case "label-short":
      return (
        <label className="text-[1.3em] sm:text-[1.4em] mb-1">{children}</label>
      );
    case "error":
      return (
        <div className="text-[1.4em] font-semibold mb-4 text-highlight-color">
          {children}
        </div>
      );
  }
};

export default FormText;
