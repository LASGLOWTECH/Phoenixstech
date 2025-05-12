import React, { useEffect, useState } from 'react';
import instance from '../config/axios.config';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instance.get('/consultation') // Replace with your actual API URL
      .then((res) => setData(res.data))
      .catch((err) => console.error('API error:', err));
  }, []);

  const downloadPdf = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download error:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Subscriptions</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">File</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="px-4 py-2 border text-sm break-words">{item.id}</td>
                <td className="px-4 py-2 border text-sm break-words">{item.firstName}</td>
                <td className="px-4 py-2 border text-sm break-words">{item.lastName}</td>
                <td className="px-4 py-2 border text-sm break-words">{item.email}</td>
                <td className="px-4 py-2 border text-sm break-words">{item.message}</td>
                <td className="px-4 py-2 border text-sm break-words">
                  {item.resume ? (
                    <button
                      onClick={() => downloadPdf(item.resume, `${item.resume}.pdf`)}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 focus:outline-none"
                    >
                      Download Resume
                    </button>
                  ) : (
                    <span className="text-red-500 text-xs">Unavailable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
