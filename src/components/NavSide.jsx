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
  useSidebar,
} from "./ui/sidebar";
import { Link } from "react-router-dom";

const NavSide = () => {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();

  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(!openMobile);
    }
  };
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
                    <SidebarMenuButton asChild onClick={handleClick}>
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
