import { signupSchema } from "@/schema/validationSchemas";
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
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/apis/apis";
import { LoaderCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "../ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { Toaster } from "../ui/toaster";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const SignUp = () => {
  const navigate = useNavigate();

  // const query = useQueryClient();

  const {
    mutate,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      console.log("Login successfully!", response);
      if (response.data?.success) {
        form.reset({
          username: "",
          email: "",
          password: "",
        });
        toast({
          title: "Signup successfully",
          description: "Login with your credential",
          action: (
            <ToastAction altText="Goto login">
              <Button onClick={() => navigate("/auth/login")}>Login</Button>
            </ToastAction>
          ),
        });
      }
    },
    onError: (err) => {
      toast({
        title: "Something went wrong",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    mutate(values);
  }

  return (
    <section className="text-gray-600 body-font">
      <Toaster />
      {error && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>{error.name}</AlertTitle>
          <AlertDescription>
             {error.message}
          </AlertDescription>
        </Alert>
      )}
      <Form {...form}>
        <div className="container lg:w-2/5 md:w-1/2  px-5 py-20 mx-auto ">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <h2 className="text-gray-900 text-2xl font-bold title-font mb-5 text-center">
                SignUp
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
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
                        <Input
                          type="password"
                          className="bg-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading && <LoaderCircle className="mr-2 animate-spin" />}
                SignUp
              </Button>
              <p className="text-sm text-slate-500 mt-3 text-center">
                Already have an account ?{" "}
                <Link className="text-blue-600" to={"/auth/login"}>
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default SignUp;
