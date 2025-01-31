import { OrganisationData } from '@/models/organisation';
import { useEffect, useState } from 'react';

function useOrganisationData(organisation: string): OrganisationData | null {
  const [data, setData] = useState<OrganisationData | null>(null);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API}/organisations/info/${organisation}`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [organisation, API]);

  return data;
}

export default useOrganisationData;
