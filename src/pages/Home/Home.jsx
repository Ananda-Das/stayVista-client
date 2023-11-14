import Categories from "../../components/Rooms/Category/Categories";
import Rooms from "../../components/Rooms/Rooms";
import Container from "../../components/Shared/Container";

const Home = () => {

  return (
    <div>
      <Container>
        {/* category  */}
        <Categories></Categories>
        {/* rooms  */}
        <Rooms></Rooms>
      </Container>
    </div>
  );
};

export default Home;
