import { loginSchema } from "@/schema/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Link } from "react-router-dom";

const Login = () => {
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <section className="text-gray-600 body-font">
      <Form {...form}>
        <div className="container lg:w-2/5 md:w-1/2  px-5 py-20 mx-auto ">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="text-gray-900 text-2xl font-bold title-font mb-5 text-center">
                Login
              </h2>

              <div className="relative">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username or email</FormLabel>
                      <FormControl>
                        <Input className="bg-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="relative">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input className="bg-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full" type="submit">
                LOGIN
              </Button>
              <p className="text-sm text-slate-500 mt-3 text-center">
                Not have account yet ?{" "}
                <Link className="text-blue-600" to={"/auth/signup"}>
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Login;
