import "./styles.css";
import LinkTree, { Link } from "./components/LinkTree";

const linkData: Link[] = [
  {
    httpLink: "https://example.com",
    name: "Example",
    imageLink: "https://fakeimg.pl/50x50/",
    description: "This is an example link",
  },
  {
    httpLink: "https://another-example.com",
    name: "Another Example",
    imageLink: "https://fakeimg.pl/50x50/",
    description: null,
  },
  // Ajoutez d'autres liens ici...
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <LinkTree LinkContainer={linkData}></LinkTree>
    </div>
  );
}
