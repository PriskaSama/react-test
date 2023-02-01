import "./App.css";

import {Footer2} from "./footer2";
import { RenderImage } from "./renderImage";

function App() {
  return (
    <>
      <div className="bg-slate-400 ">
        <h1 className="text-red-500 uppercase font-bold text-3xl">
          Hello world
        </h1>
      </div>
      <body className="h-auto w-full overflow-x-hidden mt-8">
      <RenderImage />
      <br />
      <Footer2 />
      </body>
    </>
  );
}

export default App;
