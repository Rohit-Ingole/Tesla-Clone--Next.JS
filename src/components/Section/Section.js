import * as s from "./Section.styles";
import Fade from "react-reveal/Fade";

import downArrow from "../../images/down-arrow.svg";

const Section = ({
  title,
  image,
  subtitle = "Order Online for Touchless Delivery",
  other = false,
  special = false,
}) => {
  return (
    <s.Section image={image}>
      <Fade bottom>
        <s.SectionText>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </s.SectionText>
      </Fade>
      <s.Buttons>
        <Fade bottom>
          <s.SectionButtons>
            <s.LeftButton special={special}>
              {other && special && "Shop Now"}
              {other && !special && "Order Now"}
              {!other && !special && "Custom Order"}
            </s.LeftButton>
            <s.RightButton special={special}>
              {other && !special && "Learn More"}
              {!other && !special && "Existing Inventory"}
            </s.RightButton>
          </s.SectionButtons>
        </Fade>
        <s.DownArrow src={downArrow} alt="down arrow" />
      </s.Buttons>
    </s.Section>
  );
};

export default Section;
