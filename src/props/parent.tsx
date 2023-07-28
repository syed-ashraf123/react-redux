import { Child } from "./child";
export const Parent: React.FC = () => {
  return (
    <Child color="red" onClick={() => console.log("Hello!!!")}>
      Helloww
    </Child>
  );
};
