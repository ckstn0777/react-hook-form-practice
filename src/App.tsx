import { routes } from "./router";

function App() {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-10">
        React Hook Form 플레이그라운드
      </h2>
      <ul className="grid grid-rows-2 grid-cols-2 gap-10">
        {routes
          .filter((route) => route.path !== "/")
          .map((route, i) => (
            <li
              key={i}
              className="text-[#7b68ee] border border-[#7b68ee] bg-[#f0f8ff] flex rounded-lg px-10 py-10"
            >
              <a
                href={`/react-hook-form-practice${route.path}`}
                className="main-card"
              >
                <h2 className="text-2xl font-bold mt-2 mb-6">{route.title}</h2>
                <span className="main-card-title">{route.description}</span>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default App;
