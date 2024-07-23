import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "🍌 banana", id: "1", color: "yellow" },
    { name: "🍎apple", id: "2", color: "red" },
    { name: "🥭mango", id: "3", color: "green" },
    { name: "🍊orange", id: "4", color: "orange" },
    { name: "🥝 kiwi", id: "5", color: "green" },
    { name: "🍉watermelon", id: "6", color: "green" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
