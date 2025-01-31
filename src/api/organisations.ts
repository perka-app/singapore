const API = process.env.REACT_APP_API_URL;

export const getOrganisationData = async (organisation: string) => {
  try {
    const response = await fetch(`${API}/organisations/info/${organisation}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
