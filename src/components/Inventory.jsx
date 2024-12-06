import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus, Warehouse } from "lucide-react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username required",
    })
    .max(50),
});

const Inventory = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-center gap-5">
        <Warehouse className="size-10" />
        <h1 className="text-4xl my-10">Add Inventory</h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex w-full gap-10 justify-between">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name*" className="w-80" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Brand*" className="w-80" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Category*"
                      className="w-80"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">
            <Plus />
            Product
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Inventory;
