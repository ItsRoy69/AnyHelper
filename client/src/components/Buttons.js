import React, { useState } from "react";

import PEM from "./PEM/PEM";
import { getDistance } from "geolib";
import { useSelector } from "react-redux";

export default function PEMs({ customer }) {
  const pems = useSelector((state) => state.pem);
  const [workers, setWorkers] = useState(pems);

  // -----------------------------------------DISTANCE CALCULATION------------------------------------------------
  pems.map(
    (pem) =>
      (pem.distance =
        getDistance(
          { latitude: pem.latitude, longitude: pem.longitude },
          { latitude: customer.latitude, longitude: customer.longitude }
        ) / 1000)
  );

  // ----------------------------------------SORTING-----------------------------------------------------
  function compareDistance(a, b) {
    if (a.distance < b.distance) {
      return -1;
    }
    if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  }

  const sortWorkersBydistance = () => {
    setWorkers(workers.sort(compareDistance));
  };

  return (
    <>      
      <PEM
        pems={pems}
        workers={workers}
        setWorkers={setWorkers}
        sortWorkersBydistance={sortWorkersBydistance}
        customer={customer}
      />
    </>
  );
}