type InputProps = {
  placeholder?: string;
  value: string | number;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

// Componente de entrada de formulário reutilizável para captura de texto.
export const FormInput: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="text-[1.4em] p-2 outline-none rounded-lg shadow-lg cursor-pointer mb-4 focus:shadow-tertiary-color hover:shadow-tertiary-color"
    />
  );
};
