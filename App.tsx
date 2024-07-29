import "./styles.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { NodeItem } from "./NodeItem";

type Node = {
  name: string,
  nodes?: Node[],
};

const nodes: Node[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          {
            name: "Action",
            nodes: [
              {
                name: "2000s",
                nodes: [
                  { name: "Gladiator.mp4" },
                  { name: "The-Dark-Knight.mp4" },
                ],
              },
              { name: "2010s", nodes: [] },
            ],
          },
          {
            name: "Comedy",
            nodes: [{ name: "2000s", nodes: [{ name: "Superbad.mp4" }] }],
          },
          {
            name: "Drama",
            nodes: [
              { name: "2000s", nodes: [{ name: "American-Beauty.mp4" }] },
            ],
          },
        ],
      },
      {
        name: "Music",
        nodes: [
          { name: "Rock", nodes: [] },
          { name: "Classical", nodes: [] },
        ],
      },
      { name: "Pictures", nodes: [] },
      {
        name: "Documents",
        nodes: [],
      },
      { name: "passwords.txt" },
    ],
  },
  {
    name: "About",
    nodes: [],
  },
  {
    name: "Policy",
    nodes: [
      {
        name: "Return.doc",
      },
      {
        name: "Refund.doc",
      },
    ],
  },
  {
    name: "Contact",
    nodes: [],
  },
];

export default function App() {
  return (
    <div className="App">
      <ul>
        {nodes.map((node, index) => (
          <NodeItem key={node.name} node={node} />
        ))}
      </ul>
    </div>
  );
}
