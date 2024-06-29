import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import { authOptions } from "@/app/utils/auth";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Login(){
    const session = await getServerSession(authOptions);

    if (session) {
      return redirect("/");
    }
    return (
        <div className="">
            <Dialog>
                <DialogTrigger>
                    hellow
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>

                    <GoogleSignInButton/>
                </DialogContent>
            </Dialog>
        </div>
    )
}