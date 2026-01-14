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
  message?: string;
  createdAt: string;
};

/* ================= CONSTANTS ================= */
const CITY_OPTIONS = [
  "Kashi (Varanasi)",
  "Ayodhya",
  "Prayagraj",
  "Mathura – Vrindavan",
];

/* ================= CSV HELPER ================= */
function downloadCSV(data: Enquiry[]) {
  const headers = ["Name", "Email", "Phone", "Cities", "Message", "Date"];

  const rows = data.map((e) => [
    e.name,
    e.email,
    e.phone,
    Array.isArray(e.cities) ? e.cities.join(" | ") : "",
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
  link.setAttribute("download", "enquiries.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/* ================= COMPONENT ================= */
export default function Admin() {
  const [data, setData] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  /* ================= FETCH DATA ================= */
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
      const text = search.toLowerCase();

      const matchesSearch =
        e.name.toLowerCase().includes(text) ||
        e.email.toLowerCase().includes(text) ||
        e.phone.toLowerCase().includes(text);

      const matchesCity =
        cityFilter === "All"
          ? true
          : Array.isArray(e.cities) && e.cities.includes(cityFilter);

      return matchesSearch && matchesCity;
    });
  }, [data, search, cityFilter]);

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
      <div className="min-h-screen bg-background font-sans">
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
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* 🔝 ADMIN NAVBAR */}
      <AdminNavbar />

      {/* ================= CONTENT ================= */}
      <main className="flex-1 p-6 pt-6 max-w-7xl mx-auto w-full">
        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            className="h-11 px-4 rounded-lg border w-full md:w-1/2"
            placeholder="Search name / email / phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="h-11 px-4 rounded-lg border w-full md:w-1/4"
          >
            <option value="All">All Cities</option>
            {CITY_OPTIONS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* ACTION BAR */}
        <div className="flex items-center gap-3 mb-4">
          <div className="px-4 py-2 rounded-xl bg-gray-100 text-sm font-medium">
            Total: <span className="font-bold">{filteredData.length}</span>
          </div>

          <button
            title="Delete selected"
            onClick={bulkDelete}
            disabled={!selectedIds.length}
            className={`p-2 rounded-full ${
              selectedIds.length
                ? "text-red-600 hover:bg-red-100"
                : "text-gray-400"
            }`}
          >
            <Trash2 className="h-5 w-5" />
          </button>

          <button
            title="Download CSV"
            onClick={() => downloadCSV(filteredData)}
            className="p-2 rounded-full text-blue-600 hover:bg-blue-100"
          >
            <Download className="h-5 w-5" />
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 w-10">
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
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((e) => {
                const selected = selectedIds.includes(e.id);
                const safeCities = Array.isArray(e.cities)
                  ? e.cities.join(", ")
                  : "N/A";

                return (
                  <tr
                    key={e.id}
                    className={`group border-t hover:bg-gray-50 ${
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
                    <td className="p-3">{safeCities}</td>
                    <td className="p-3 truncate max-w-xs">
                      {e.message || "-"}
                    </td>
                    <td className="p-3 text-gray-500">
                      {new Date(e.createdAt).toLocaleString()}
                    </td>

                    <td className="p-3 flex justify-center gap-3">
                      <a
                        href={`https://wa.me/${e.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        className="p-2 rounded-full text-green-600 hover:bg-green-100"
                      >
                        <FaWhatsapp className="h-5 w-5" />
                      </a>

                      <button
                        onClick={async () => {
                          if (!confirm("Delete this enquiry?")) return;
                          await fetch(`/api/enquiries/${e.id}`, {
                            method: "DELETE",
                          });
                          setData((prev) =>
                            prev.filter((x) => x.id !== e.id)
                          );
                          setSelectedIds((prev) =>
                            prev.filter((x) => x !== e.id)
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
