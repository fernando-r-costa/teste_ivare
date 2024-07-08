type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

// Componente de botão reutilizável com estilos padrão usando Tailwind CSS.
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ml-auto mx-4 mt-4 bg-primary-color text-light-color text-[1.4em] px-4 py-2 rounded-lg shadow-lg cursor-pointer focus:shadow-tertiary-color hover:shadow-tertiary-color"
    >
      {children}
    </button>
  );
};

export default Button;
