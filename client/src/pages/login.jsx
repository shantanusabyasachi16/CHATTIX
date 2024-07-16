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
import { useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "@/utils/validators";
import { Typography } from "@mui/material";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [profilePic, setProfilePic] = useState(null);

  const password = useStrongPassword(); // Using useStrongPassword hook
  const Name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      
      console.log("Logging in with:", {
        name: Name.value,
        password: password.value,
      });
    } else {
 
      console.log("Signing up with:", {
        name: Name.value,
        username: username.value,
        password: password.value,
        bio : bio.value,
        profilePic,
      });
    }
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(20,20,200,0.5), rgba(120,110,220,0.5))",
      minHeight: "100vh",
    }}>
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex justify-center items-center">
            {isLogin ? "Login" : "Signup"}
          </CardTitle>
          <CardDescription className="flex justify-center items-center">
            {isLogin
              ? "Enter your email below to login to your account."
              : "Enter your details below to create a new account."}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
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
                    className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full cursor-pointer"
                  >
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
                <Input
                  id="bio"
                  type="text"
                  placeholder="Tell us about yourself"
                  required
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
              </div>
            )}
            {!isLogin && (
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="username"
                  required
                  value={username.value}
                  onChange={username.changeHandler}
                />
                {username.error && (
                  <p className="text-red-500">{username.error}</p>
                )}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                required
                value={password.value}
                onChange={password.changeHandler}
              />
            </div>
            {password.error && (
              <Typography color="error" variant="caption">
                {password.error}
              </Typography>
            )}
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
            <Button className="w-full" type="submit">
              {isLogin ? "Signin" : "Signup"}
            </Button>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
    </div>
  );
}
