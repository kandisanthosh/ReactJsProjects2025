function ClickEventHandler() {
  function clickHandler() {
    console.log('You CLicked the action button');
  }

  return (
    <div>
      <button onClick={clickHandler}>Action</button>
    </div>
  );
}

export default ClickEventHandler;
