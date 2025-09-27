import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-lg font-bold text-blue-700">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-600">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
