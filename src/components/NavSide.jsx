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
import { Link } from "react-router-dom";

const NavSide = () => {
  //const { state, open, setOpen, toggleSidebar } = useSidebar();
  const items = [
    {
      title: "Home",
      url: "/",
      icon: House,
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Inventory",
      url: "/inventory",
      icon: ListPlus,
    },
    {
      title: "Products",
      url: "/products",
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
                      {/* <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a> */}
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
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
