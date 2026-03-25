import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-row flex-1 items-center justify-center font-sans gap-4 bg-[url(https://cdn.pixabay.com/photo/2022/11/23/10/26/mountains-7611804_1280.jpg)] bg-cover">
      <div className="h-dvh flex flex-row flex-1 items-center justify-center backdrop-blur-sm">
        <Link href="/dmview" className="h-105 w-full max-w-md ">
          <Card className="h-105 max-w-md mx-2 hover:shadow-xl hover:scale-105">
            <img
              src="https://cdn.pixabay.com/photo/2019/08/17/21/54/dungeons-and-dragons-4413056_1280.jpg"
              alt="dice with notebook"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle>Dungeon Master</CardTitle>
              <CardDescription>
                WIP system to easily manage and view turn amount, player
                conditions and condition length, initiative, player stats and
                monsters
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/playerview" className="h-105 w-full max-w-md ">
          <Card className="h-105 max-w-md mx-2 hover:shadow-xl hover:scale-105">
            <img
              src="https://cdn.pixabay.com/photo/2023/03/15/12/56/dice-7854512_1280.jpg"
              alt="pile of d20 dice"
              className="relative z-20 aspect-video w-full object-cover"
            />
            <CardHeader>
              <CardTitle>Player</CardTitle>
              <CardDescription>
                WIP system to manage player character actions and conditions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
