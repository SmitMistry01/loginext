type ModalProps = {
  formData: {
    name: string;
    email: string;
    phone: number;
    website: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: number;
      website: string;
    }>
  >;
  onClose: () => void;
  onSubmit: () => void;
};

const Modal = ({ formData, setFormData, onClose, onSubmit }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-96 shadow-lg">
        <h2 className="text-lg font-bold mb-4">Basic Modal</h2>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            className="w-full border p-2 rounded"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: Number(e.target.value) })
            }
          />
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Website"
            value={formData.website}
            onChange={(e) =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
