import React from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Plus, User } from "lucide-react";

function Home() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen">
      <ResizablePanel defaultSize={25} className="h-screen">
        <Navigation />
      </ResizablePanel>
      <ResizableHandle withHandle className="h-screen" />
      <ResizablePanel defaultSize={75}>
        <>
          <div className="h-25 p-5 border-b-2 border-secondary">
            <div className="flex justify-end gap-2 ">
              <Plus />
              <User />
            </div>
          </div>
          <div></div>
        </>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Home;
