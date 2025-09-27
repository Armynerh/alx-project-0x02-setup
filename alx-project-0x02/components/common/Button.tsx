import { type ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ onClick, label, size = "medium", shape = "rounded-md" }) => {
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white ${sizeClasses[size]} ${shape} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    >
      {label}
    </button>
  );
};
export default Button;