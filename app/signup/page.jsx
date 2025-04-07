import { SignUpForm } from "@/components/Register-form";

export default function LoginPage() {
  return (
    (<div
      className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>)
  );
}
