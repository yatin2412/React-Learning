import React from "react";

// type Props = {
//   label: string;
//   count: number;
//   // React's setter type: React.Dispatch<React.SetStateAction<number>>
//   setCount: (updater: React.SetStateAction<number>) => void;
// };

const TestComp = React.memo(function TestComp({ label, count, setCount }) {
  console.log("Rendered Test Comp:", label, "| count prop:", count);

  return (
    <div style={{ padding: 8, border: "1px solid #ccc", margin: 4 }}>
      <div>
        {label}: {count}
      </div>
      {/* This inline function is created inside the child.
          That's okay: the child renders only when its props change.
          The parent is passing stable props, so parent re-renders
          won't force this child to re-render unless `count` changes. */}
      <button onClick={() => setCount((c) => c + 1)}>Inc {label}</button>
    </div>
  );
});

export default TestComp;