export function Main(props) {
  return (
    <main className="main">
      <div className="container main__inner">
        { props.children }
      </div>
    </main>
  );

}

