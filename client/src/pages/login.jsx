import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Upload } from "react-feather";
import { useInputValidation } from "6pp";
import { usernameValidator } from "@/utils/validator";
import { Typography } from "antd";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [profilePic, setProfilePic] = useState(null);

  const Name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-center items-center">
            {isLogin ? "Login" : "Register"}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Enter your email below to login to your account."
              : "Enter your details below to create a new account."}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {!isLogin && (
            <div className="flex flex-col items-center space-y-2">
              <div className="relative">
                <img
                  src={profilePic || "/default-profile.png"}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <label
                  htmlFor="profilePic"
                  className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer">
                  <Upload color="white" size={16} />
                  <input
                    id="profilePic"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="name"
              required
              value={Name.value}
              onChange={Name.changeHandler}
            />
          </div>
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" type="text" placeholder="Tell us about yourself" required />
            </div>
          )}
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="username"
                value={username.value}
                onChange={username.changeHandler}
              />
              {username.error && (
                <Typography.Text type="danger">
                  {username.error}
                </Typography.Text>
              )}
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="password" required />
          </div>
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="confirm password"
                required
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full">{isLogin ? "Sign in" : "Register"}</Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
