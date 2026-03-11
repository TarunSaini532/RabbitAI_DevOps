import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!file || !email) {
      setMessage("Please upload a file and enter email");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);

    try {
      setLoading(true);

      const res = axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, formData);

      setMessage(res.data.message);
    } catch (err) {
      console.log(err);
      setMessage("Upload failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Sales Insight Automator
        </h1>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4 border p-2 rounded"
        />

        <input
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 border p-2 rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Processing..." : "Upload File"}
        </button>

        {message && <p className="text-center mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
}
