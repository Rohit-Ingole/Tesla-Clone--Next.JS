import model_s from "../images/model-s.jpg";
import model_x from "../images/model-x.jpg";
import model_y from "../images/model-y.jpg";
import model_3 from "../images/model-3.jpg";
import solarPanel from "../images/solar-panel.jpg";
import solarRoof from "../images/solar-roof.jpg";
import accessories from "../images/accessories.jpg";

const homeData = [
  {
    title: "Model S",
    image: model_s,
  },
  {
    title: "Model X",
    image: model_x,
  },
  {
    title: "Model Y",
    image: model_y,
  },
  {
    title: "Model 3",
    image: model_3,
  },
  {
    title: "Solar Panels",
    image: solarPanel,
    subtitle: "Money-back gurantee",
    other: true,
  },
  {
    title: "Solar Roof",
    image: solarRoof,
    subtitle: "solar roof costs less than a new roof plus solar panels",
    other: true,
  },
  {
    title: "Accessories",
    image: accessories,
    subtitle: "",
    other: true,
    special: true,
  },
];

export default homeData;
