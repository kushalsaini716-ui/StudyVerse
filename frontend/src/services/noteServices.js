const API_URL = "http://localhost:5000/api/notes";

export async function getNotes(filters = {}) {
  const params = new URLSearchParams();

  if (filters.search) params.append("search", filters.search);
  if (filters.college) params.append("college", filters.college);
  if (filters.branch) params.append("branch", filters.branch);

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Failed to fetch notes");
  }

  return response.json();
}