import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-row flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Card className="w-1/2 max-w-sm mx-2 p-2">
        <CardHeader>
          <CardTitle>Test card</CardTitle>
          <CardDescription>DM view card description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          quasi quas officia fugit fuga fugiat cupiditate quis. Voluptatibus
          quas nulla qui rerum quia rem, eligendi nihil nam, inventore culpa
          eveniet?
        </CardContent>
      </Card>
      <Card className="w-1/2 max-w-sm mx-2 p-2">
        <CardHeader>
          <CardTitle>Test card 2</CardTitle>
          <CardDescription>Player view card description</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          quasi quas officia fugit fuga fugiat cupiditate quis. Voluptatibus
          quas nulla qui rerum quia rem, eligendi nihil nam, inventore culpa
          eveniet?
        </CardContent>
      </Card>
    </div>
  );
}
