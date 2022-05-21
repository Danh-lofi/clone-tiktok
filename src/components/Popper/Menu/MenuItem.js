import Button from "~/components/Button";
function MenuItem({ data, onClick }) {
  return (
    <Button
      separate={data.separate}
      className={"menu-item"}
      lefticon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
