import single from "../img/single.png";
import double from "../img/double.png";
import triple from "../img/triple.png";
import Card from "./Card";
function Cards() {
  const cardSingle = ["500 GB Storage", "1 Granted User", "Send up to 2 GB"];
  const cardDouble = ["500 GB Storage", "1 Granted User", "Send up to 2 GB"];
  const cardTriple = ["500 GB Storage", "1 Granted User", "Send up to 2 GB"];
  return (
    <section className="bg-white">
      <div className="container mx-auto grid py-16 px-4 gap-16 md:grid-cols-3 md:gap-6">
        <Card
          image={single}
          userType="Single user"
          price="$149"
          desc={cardSingle}
        />
        <Card
          image={double}
          userType="Double user"
          price="$149"
          desc={cardDouble}
        />
        <Card
          image={triple}
          userType="Triple user"
          price="$149"
          desc={cardTriple}
        />
      </div>
    </section>
  );
}

export default Cards;
