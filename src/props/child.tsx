interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
export const Child: React.FC<ChildProps> = (props) => {
  return (
    <h1>
      {props.color}
      <button onClick={props.onClick}></button>
      {props.children}
    </h1>
  );
};
