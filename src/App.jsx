import Star from "./Star";


function App() {
  return (
    <>
      <Star id={"example"} position={{ x: 300, y: 500 }} destroyCallback={(id) => {
        console.log("Clicked!");
      }} />
    </>
  );
}

export default App
