import { useEffect, useState } from "react";
import "../spinner.css";
import Profile from "./Profile";
import axios from "axios";
import toast from "react-hot-toast";

export const LogiNext = () => {
  const [data, setData] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => setData(response.data))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((user) => user.id !== id));
    toast.success("Profile deleted!");
  };

  const handleUpdate = (updated: {
    id: string;
    name: string;
    email: string;
    phone: number;
    website: string;
  }) => {
    setData((prev) =>
      prev.map((profile) =>
        profile.id === updated.id ? { ...profile, ...updated } : profile
      )
    );
    toast.success("Profile updated!");
  };

  return (
    <>
      <div className=" grid grid-cols-4 m-6">
        {loading ? (
          <div className="spinner"></div>
        ) : data && data.length > 0 ? (
          data.map((data: any) => (
            <Profile
              key={data.id}
              id={data.id}
              name={data.name}
              email={data.email}
              phone={data.phone}
              website={data.website}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
};
