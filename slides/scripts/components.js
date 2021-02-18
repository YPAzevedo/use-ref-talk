import * as React from "react";
import ReactConfetti from "react-confetti";
import { useRerender, useWindowSize } from "./hooks";
//Button
function Button({ children, ...props }) {
  return (
    <button className="button-component" {...props}>
      {children}
    </button>
  );
}
//Spacer
export function Spacer({ size = 24 }) {
  return <span className="spacer" style={{ marginBottom: size }} />;
}
//CounterRef
export function CounterRef() {
  const countRef = React.useRef(0);
  const rerender = useRerender();
  return (
    <div>
      <h1>{countRef.current}</h1>
      <Button onClick={() => countRef.current--}>-</Button>
      <Button onClick={() => countRef.current++}>+</Button>
      <Button onClick={rerender}>Rerender</Button>
    </div>
  );
}
//CounterLet
let counter = 0;

export function CounterLet() {
  const rerender = useRerender();
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={() => counter--}>-</Button>
      <Button onClick={() => counter++}>+</Button>
      <Button onClick={rerender}>Rerender</Button>
    </div>
  );
}
//DOMExample
export function AccessDOM() {
  const domRef = React.useRef(null);
  const [hide, setHide] = React.useState(false);
  const [el, setEl] = React.useState(domRef.current);

  const toggle = () => setHide((h) => !h);

  React.useLayoutEffect(() => {
    setEl(domRef.current && domRef.current.nodeName);
  }, [hide]);

  return (
    <div>
      {!hide && <div ref={domRef}>Hello im a div element 👋</div>}
      <span>{el ? `Node name is: ${el}` : `Node is ${el}`}</span>
      <Button onClick={toggle}>Toggle Hide</Button>
    </div>
  );
}
//Input focus useImperativeHandle
const Input = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null);
  React.useImperativeHandle(
    ref,
    () => ({
      focus: () => inputRef.current.focus(),
    }),
    []
  );

  return (
    <input style={{ padding: 8, borderRadius: 8 }} ref={inputRef} {...props} />
  );
});

export function InputFocus() {
  const inputRef = React.useRef(null);

  return (
    <div>
      <Input ref={inputRef} placeholder="useImperativeHandle" />
      <Button onClick={() => inputRef.current.focus()}>Focus</Button>
    </div>
  );
}

//Confetti

export function Confetti() {
  const [show, setShow] = React.useState(false);
  const { width, height } = useWindowSize();
  const timerRef = React.useRef(0);

  const handleClick = () => {
    setShow(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShow(false);
    }, 10000);
  };

  return (
    <div>
      <Button onClick={handleClick}>Click here!</Button>
      {show ? <ReactConfetti width={width} height={height} /> : null}
    </div>
  );
}
