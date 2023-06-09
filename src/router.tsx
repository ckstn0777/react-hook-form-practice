import App from "./App";
import ReactForm from "./pages/ReactForm";
import ReactHookFormBasic from "./pages/ReactHookFormBasic";
import UncontrolledForm from "./pages/UncontrolledForm";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/react-form",
    element: <ReactForm />,
    title: "React Form",
    description: "React Form 기본 사용법",
  },
  {
    path: "/react-hook-form-basic",
    element: <ReactHookFormBasic />,
    title: "React Hook Form Basic",
    description: "React Hook Form 기본 사용법",
  },
  {
    path: "/uncontrolled-form",
    element: <UncontrolledForm />,
    title: "비제어 컴포넌트",
    description: "비제어 컴포넌트를 사용해서 Form 구현",
  },
];
