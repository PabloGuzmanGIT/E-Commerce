import { Percentage } from "../../components/percentage/percentage";
import "./delivery.scss";

export function PageDelivery() {
  const dataPercentage = [
    {
      label: "JS",
      percentage: "80%",
    },
    {
      label: "HTML",
      percentage: "40%",
    },
    {
      label: "CSS",
      percentage: "50%",
    },
    {
      label: "REACT",
      percentage: "90%",
    },
    {
      label: "JS",
      percentage: "80%",
    },
    {
      label: "HTML",
      percentage: "40%",
    },
    {
      label: "CSS",
      percentage: "50%",
    },
    {
      label: "REACT",
      percentage: "90%",
    },
  ];

  return (
    <div className="page-delivery">
      <h1>Delivery</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          delectus quia dicta! Deleniti voluptatibus incidunt corporis fugit,
          porro nulla illum exercitationem, ex, recusandae necessitatibus
          tempora. Molestias qui blanditiis porro ducimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          delectus quia dicta! Deleniti voluptatibus incidunt corporis fugit,
          porro nulla illum exercitationem, ex, recusandae necessitatibus
          tempora. Molestias qui blanditiis porro ducimus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          delectus quia dicta! Deleniti voluptatibus incidunt corporis fugit,
          porro nulla illum exercitationem, ex, recusandae necessitatibus
          tempora. Molestias qui blanditiis porro ducimus.
        </p>
      </div>
      <div className="grid">
        {dataPercentage.map((item) => (
          <Percentage label={item.label} percentage={item.percentage} />
        ))}
      </div>
    </div>
  );
}
