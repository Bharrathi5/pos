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
  name: z
    .string()
    .min(2, {
      message: "Name required",
    })
    .max(50),
  brand: z
    .string()
    .min(2, {
      message: "Brand required",
    })
    .max(50),
  category: z
    .string()
    .min(2, {
      message: "Category required",
    })
    .max(50),
  description: z.string().max(50, {
    message: "Cannot be more than 50 words",
  }),
});

const Inventory = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", brand: "", category: "" },
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name*" className="w-96" {...field} />
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
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input placeholder="Brand*" className="w-96" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                  This is your tool brand.
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Category*"
                      className="w-96"
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                  This is your tool category .
                </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Product Description"
                    className="w-full"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your puroduct description.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

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
