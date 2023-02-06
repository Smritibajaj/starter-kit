import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import Header from "../../components/Header";

function Home() {
  return (
    <>
    <Header />
      <Button
        className="bg-green-100"
        aria-label="Previous"
      >
        Previous
      </Button>
      <Input type={"text"} value={'test'}/>
      <Table />
    </>
  );
}

export default Home;
