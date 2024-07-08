type FormProps = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
};

// Componente de formulário que encapsula campos de entrada de dados.
const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col mt-4">
      {children}
    </form>
  );
};

export default Form;
