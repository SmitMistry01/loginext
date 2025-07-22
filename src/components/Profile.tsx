import { useState } from "react";
import { Globe, Mail, Phone, Heart, Pencil, Trash } from "lucide-react";
import Modal from "./Modal";

type Props = {
  id: string;
  name: string;
  email: string;
  phone: number;
  website: string;
  onDelete: (id: string) => void;
  onUpdate: (updated: {
    id: string;
    name: string;
    email: string;
    phone: number;
    website: string;
  }) => void;
};

const Profile = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: props.name,
    email: props.email,
    phone: props.phone,
    website: props.website,
  });

  const handleUpdate = () => {
    props.onUpdate({ id: props.id, ...formData });
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center max-w-sm m-4 border-b-gray-200">
        <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center" />
        <div className="w-full">
          <div className="text-xl font-semibold text-center mb-2">
            {props.name}
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="text-lg text-blue-500" />
              <span>{props.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="text-lg text-green-500" />
              <span>{props.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Globe className="text-lg text-purple-500" />
              <span>{props.website}</span>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-200 rounded-md p-4 flex gap-4">
                <Heart className="text-red-500 cursor-pointer" size={20} />
                <Pencil
                  className="text-blue-500 cursor-pointer"
                  size={20}
                  onClick={() => setShowModal(true)}
                />
                <Trash
                  className="text-gray-500 cursor-pointer"
                  size={20}
                  onClick={() => props.onDelete(props.id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowModal(false)}
          onSubmit={handleUpdate}
        />
      )}
    </>
  );
};

export default Profile;
