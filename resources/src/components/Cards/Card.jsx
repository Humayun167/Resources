import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Tailwind_card from "./Tailwind_card/Tailwind_card";

const Card = () => {
  return (
    <div className="flex ">
      <Card1></Card1>,<Card2></Card2>
      <Tailwind_card></Tailwind_card>
    </div>
  );
};

export default Card;
