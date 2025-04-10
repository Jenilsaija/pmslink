import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function SignUpForm({
  className,
  singUpFormData,
  onChange,
  handleSubmit,
  error,
  ...props
}) {
  return (
    (<div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href="#" className="flex flex-col items-center gap-2 font-medium">
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">PMSLINK</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to PMSLINK</h1>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Log in
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="name" className={error.name ? "border-red-500" : ""} placeholder="Name" onChange={onChange} value={singUpFormData.name} />
              {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" className={error.email ? "border-red-500" : ""} placeholder="abc@example.com" onChange={onChange} value={singUpFormData.email} />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" className={error.password ? "border-red-500" : ""} placeholder="password" onChange={onChange} value={singUpFormData.password} />
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cnfpassword">Conform Password</Label>
              <Input id="cnfpassword" name="cnfpassword" type="password" className={error.cnfpassword ? "border-red-500" : ""} placeholder="password" onChange={onChange} value={singUpFormData.cnfpassword} />
              {error.cnfpassword && <p className="text-red-500 text-sm">{error.cnfpassword}</p>}
            </div>
            <Button type="submit" className="w-full cursor-pointer" onClick={handleSubmit}>
              Register
            </Button>
          </div>
        </div>
      </form>
      <div
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>)
  );
}
