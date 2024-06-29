import Navbar from "../content/Navbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Outlet } from "react-router-dom";
import { Plus, User } from "lucide-react";

function AppLayout() {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="h-screen">
        <ResizablePanel
          defaultSize={25}
          className="h-screen bg-black text-white"
        >
          <Navbar />
        </ResizablePanel>
        <ResizableHandle withHandle className="h-screen " />
        <ResizablePanel defaultSize={75} className="bg-black text-white">
          <>
            <div className="h-25 p-5 border-b-2 border-secondary">
              <div className="flex justify-end gap-2 ">
                <Plus />
                <User />
              </div>
            </div>
            <div>{<Outlet />}</div>
          </>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default AppLayout;
