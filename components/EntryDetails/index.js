import styled from "styled-components";
// Hooks
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EntryDetails = () => {
  const router = useRouter();
  const { entryId } = router.query;
  const [entryData, setEntryData] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/entry?entryId=${entryId}`);

      if (response.ok) {
        const { data } = await response.json();
        setEntryData(data);
      }
    })();
  }, [entryId]);

  if (!entryData) return <p>Loading..</p>;

  const { entryName } = entryData;

  return <StyledHeadline>{entryName}</StyledHeadline>;
};

export default EntryDetails;

const StyledHeadline = styled.p`
  max-width: 90%;
  margin: 10px 0 0 5%;
  padding: 5px;
  font-size: 2rem;
  text-align: center;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
