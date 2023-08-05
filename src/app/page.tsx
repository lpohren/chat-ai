import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Versel SDK to create a chat bot
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 text-slate-500 text-sm">
            <Avatar>
              <AvatarFallback>LP</AvatarFallback>
              <AvatarImage src="https://github.com/lpohren.png"></AvatarImage>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Human:</span>
              Whats your opinion about Fausto Silva?
            </p>
          </div>

          <div className="flex gap-2 text-slate-500 text-sm">
            <Avatar>
              <AvatarFallback>CH</AvatarFallback>
              <AvatarImage src="https://github.com/robotframework.png"></AvatarImage>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Robot:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              totam magni architecto itaque, placeat voluptas incidunt nisi
              nobis accusamus explicabo quod pariatur? Ipsam dolore sit eveniet
              illum vitae expedita quis?
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
