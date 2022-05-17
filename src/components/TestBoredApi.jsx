import React, { useEffect, useState } from "react";

export default function TestFetch() {
  const [actividad, setActividad] = useState({ activity: "", type: "" });
  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setActividad({ activity: res.activity, type: res.type });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {JSON.stringify(actividad)}
      <br />
      actividad: {actividad.activity}
      <br />
      tipo: {actividad.type}
      <br />
    </div>
  );
}
