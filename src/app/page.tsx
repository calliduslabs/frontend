import { get } from "@/actions/get";

const Home = async () => {
  const result = await get();

  return (
    <div>
      <p>{JSON.stringify(result)}</p>
    </div>
  );
};

export default Home;
