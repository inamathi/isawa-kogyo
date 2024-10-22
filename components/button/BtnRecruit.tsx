import Link from "next/link";
import Image from "next/image";

interface BtnRecruitProps {
  href: string;
}

const BtnRecruit: React.FC<BtnRecruitProps> = ({ href }) => {
  return (
    <div className="flex gap-8 w-2/3 mx-auto items-center justify-center">
      <div className="w-1/3">
        <Image
          src="/image/img_illust-recruit.svg"
          width="600"
          height="600"
          alt="石和工業では新たな人材を募集しています"
          className="object-cover"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-bold text-2xl text-white">
          石和工業では新たな人材を募集しています
        </h2>
        <p className="text-white">未経験大歓迎（１８歳以上）</p>
        <p className="text-white">詳しくはこちらから</p>
        <Link
          href={href}
          className="mx-auto text-xl text-white flex flex-col gap-4 items-center justify-center py-2 px-8 bg-black bg-opacity-50 border border-[#f8daac] hover:bg-white hover:bg-opacity-20 rounded-full mt-8"
        >
          求人情報を見る
        </Link>
      </div>
    </div>
  );
};

export default BtnRecruit;
