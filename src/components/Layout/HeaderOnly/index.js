import Header from "../components/Header";

function HeaderOnly(props) {
  return (
    <div>
      <Header />
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
