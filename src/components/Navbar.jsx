import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, UserCheck, Users } from "lucide-react";
import { avatar, logo } from "@/constants/images";
const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <img
          className="size-14 md:size-16 object-cover rounded-3xl cursor-pointer"
          src={logo}
          alt="logo"
        />
        <p className="font-bold">SHARK POS</p>
      </div>
      <div className="md:pr-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage
                src={avatar}
                className="size-12 md:size-16 object-cover rounded-full cursor-pointer hover: border-zinc-600 hover:border-2"
              />
              <AvatarFallback>admin</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCheck />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Users />
              Team
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <LogOut />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
