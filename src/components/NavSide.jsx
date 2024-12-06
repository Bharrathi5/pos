import { FolderKanban, LayoutDashboard, ListPlus, House } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const NavSide = () => {
  //const { state, open, setOpen, toggleSidebar } = useSidebar();
  const items = [
    {
      title: "Home",
      url: "#",
      icon: House,
    },
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Inventory",
      url: "#",
      icon: ListPlus,
    },
    {
      title: "Products",
      url: "#",
      icon: FolderKanban,
    },
  ];
  return (
    <div className="">
      <Sidebar side="left" collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default NavSide;
