import React, { useEffect, useState } from "react";
import axios from "axios";

const BloodDonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllDonors = async () => {
    try {
      let page = 1;
      let allDonors = [];
      let totalPages = 1;

      while (page <= totalPages) {
        const res = await axios.get(
          `https://hamarashahar.com/nagda/wp-json/wp/v2/blood_donor`,
          {
            params: {
              per_page: 100,
              page: page,
            },
          }
        );

        allDonors = [...allDonors, ...res.data];

        totalPages = res.headers["x-wp-totalpages"];
        page++;
      }

      setDonors(allDonors);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllDonors();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">

      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
        Blood Donor List
      </h1>

      {loading ? (
        <p className="text-center">Loading donors...</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow rounded-lg">

          <table className="min-w-full border">

            <thead className="bg-red-500 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Blood Group</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">City</th>
              </tr>
            </thead>

            <tbody>
              {donors.map((donor) => (
                <tr key={donor.id} className="border-b hover:bg-gray-50">

                  <td
                    className="p-3"
                    dangerouslySetInnerHTML={{ __html: donor.title.rendered }}
                  />

                  <td className="p-3">{donor.acf?.blood_group}</td>

                  <td className="p-3">{donor.acf?.mobile}</td>

                  <td className="p-3">{donor.acf?.city}</td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}
    </div>
  );
};

export default BloodDonorList;