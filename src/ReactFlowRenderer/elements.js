export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Node 1",
    },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: {
      label: "Node 2",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: {
      label: "Node 3",
    },
    position: { x: 400, y: 100 },
    style: {
      background: "#D6D5E6",
      color: "#333",
      border: "1px solid #222138",
      width: 180,
    },
  },
];

export const edges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep", animated: true },
  { id: "e1-3", source: "1", target: "3", type: "smoothstep", animated: true },
];
