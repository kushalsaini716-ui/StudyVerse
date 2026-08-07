const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export async function getNotes(filters = {}) {
  const params = new URLSearchParams();

  if (filters.search) params.append("search", filters.search);
  if (filters.college) params.append("college", filters.college);
  if (filters.branch) params.append("branch", filters.branch);

  const response = await fetch(
    `${API_URL}/api/notes?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
}