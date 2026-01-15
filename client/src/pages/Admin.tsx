import { useEffect, useMemo, useState } from "react";
import { Trash2, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { AdminNavbar } from "@/components/MainAdminNavbar";
import { Footer } from "@/components/Footer";

/* ================= TYPES ================= */
type Enquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  cities?: string[];
  days: number;
  message?: string;
  createdAt: string;
};

/* ================= CSV DOWNLOAD ================= */
function downloadCSV(data: Enquiry[]) {
  const headers = [
    "Name",
    "Email",
    "Phone",
    "Cities",
    "Days",
    "Message",
    "Created At",
  ];

  const rows = data.map((e) => [
    e.name,
    e.email,
    e.phone,
    Array.isArray(e.cities) ? e.cities.join(" | ") : "",
    e.days,
    e.message || "",
    new Date(e.createdAt).toLocaleString(),
  ]);

  const csv = [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "enquiries.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ================= WHATSAPP MESSAGE ================= */
function buildWhatsAppMessage(e: Enquiry) {
  return encodeURIComponent(
    `Hi ${e.name} 🙏

Thank you for contacting *Nerds Travel* ✨

📍 Cities: ${
      Array.isArray(e.cities) ? e.cities.join(", ") : "N/A"
    }
🗓 Trip Days: ${e.days}
📞 Phone: ${e.phone}

Please share your preferred travel date & budget.`
  );
}

/* ================= COMPONENT ================= */
export default function Admin() {
  const [data, setData] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  /* ================= FETCH ================= */
  useEffect(() => {
    fetch("/api/enquiries")
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) {
          setData(
            [...res].sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  /* ================= FILTER ================= */
  const filteredData = useMemo(() => {
    return data.filter((e) => {
      const t = search.toLowerCase();
      return (
        e.name.toLowerCase().includes(t) ||
        e.email.toLowerCase().includes(t) ||
        e.phone.includes(t)
      );
    });
  }, [data, search]);

  /* ================= SELECT ================= */
  const allSelected =
    filteredData.length > 0 &&
    filteredData.every((e) => selectedIds.includes(e.id));

  function toggleSelect(id: number) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function toggleSelectAll() {
    setSelectedIds(allSelected ? [] : filteredData.map((e) => e.id));
  }

  async function bulkDelete() {
    if (!selectedIds.length) return;
    if (!confirm(`Delete ${selectedIds.length} enquiries?`)) return;

    await Promise.all(
      selectedIds.map((id) =>
        fetch(`/api/enquiries/${id}`, { method: "DELETE" })
      )
    );

    setData((prev) => prev.filter((e) => !selectedIds.includes(e.id)));
    setSelectedIds([]);
  }

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen">
        <AdminNavbar />
        <p className="text-center mt-32 text-gray-500">
          Loading enquiries...
        </p>
        <Footer />
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AdminNavbar />

      <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
        {/* SEARCH + ACTIONS */}
        <div className="flex flex-col md:flex-row gap-4 mb-5">
          <input
            className="h-11 px-4 rounded-lg border w-full md:w-1/2 text-sm sm:text-base"
            placeholder="Search name / email / phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            onClick={() => downloadCSV(filteredData)}
            className="h-11 px-4 rounded-lg bg-blue-600 text-white"
          >
            Download CSV
          </button>

          <button
            onClick={bulkDelete}
            disabled={!selectedIds.length}
            className={`h-11 px-4 rounded-lg ${
              selectedIds.length
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            Delete Selected
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto border rounded-xl bg-white">
          <table className="w-full text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Cities</th>
                <th className="p-3">Days</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((e) => {
                const selected = selectedIds.includes(e.id);

                return (
                  <tr
                    key={e.id}
                    className={`border-t ${
                      selected ? "bg-orange-50" : ""
                    }`}
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleSelect(e.id)}
                      />
                    </td>

                    <td className="p-3 font-medium">{e.name}</td>
                    <td className="p-3">{e.email}</td>
                    <td className="p-3">{e.phone}</td>
                    <td className="p-3">
                      {Array.isArray(e.cities)
                        ? e.cities.join(", ")
                        : "-"}
                    </td>
                    <td className="p-3">{e.days}</td>
                    <td className="p-3 max-w-xs truncate">
                      {e.message || "-"}
                    </td>
                    <td className="p-3 text-gray-500">
                      {new Date(e.createdAt).toLocaleString()}
                    </td>

                    {/* ACTIONS */}
                    <td className="p-3 flex justify-center gap-3">
                      {/* WHATSAPP */}
                      <a
                        href={`https://wa.me/${e.phone.replace(
                          /\D/g,
                          ""
                        )}?text=${buildWhatsAppMessage(e)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full text-green-600 hover:bg-green-100"
                        title="Send WhatsApp"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                      </a>

                      {/* DELETE */}
                      <button
                        onClick={async () => {
                          if (!confirm("Delete this enquiry?")) return;
                          await fetch(`/api/enquiries/${e.id}`, {
                            method: "DELETE",
                          });
                          setData((prev) =>
                            prev.filter((x) => x.id !== e.id)
                          );
                        }}
                        className="p-2 rounded-full text-red-600 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <p className="text-center p-6 text-gray-500">
              No enquiries found
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
