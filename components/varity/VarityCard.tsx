import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import Image from "next/image";

export default function VarityCard() {
  return (
    <div className="relative w-96 mt-12 group">
      {/* Badge ทับที่ขอบแบบมีระยะชัดเจน และอยู่เหนือเงา */}
      <Badge className="absolute -top-5 left-4 z-10 h-8 w-36 text-white font-bold text-base flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
        X CORNER
      </Badge>

      <Card className="p-4 shadow-lg transition-all duration-300 group-hover:shadow-xl">
        <Image
          src="/images/IMG_1139cc14fe21210b3719.jpeg"
          alt="Varity Card Image"
          width={384}
          height={200}
          className="rounded-xl object-cover w-full h-52"
        />

        <div className="flex items-center justify-between">
          <Link
            href="https://www.soccersuck.com/boards/topic/2558374"
            className="block text-lg font-semibold leading-snug hover:text-primary transition-colors"
            target="_blank"
          >
            แนนดลยา 1 รูป ถ้วน!!!
          </Link>
          <Badge variant={"outline"} className="text-xs p-1">
            Varity
          </Badge>
        </div>
      </Card>
    </div>
  );
}
