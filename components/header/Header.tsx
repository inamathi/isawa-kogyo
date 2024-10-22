import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="mx-auto text-xl text-white flex flex-col gap-4 items-center justify-center py-2 px-8 border-b-[#f8daac] bg-slate-900 bg-opacity-50 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-end">
          <div className="flex flex-col gap-2 items-center w-[160px]">
            <Link href="/">
              <Image
                src="/image/img_logo-isawa-posi.svg"
                width="200"
                height="100"
                alt="isawa-kogyo logo"
                className="object-cover"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <div className="text-sm">有限会社 石和工業</div>
          </div>
          <ul className="flex gap-8">
            <li className="text-[16px] font-bold hover:text-blue-300">
              <Link href="/">会社概要</Link>
            </li>
            <li className="text-[16px] font-bold hover:text-blue-300">
              <Link href="/inquery">求人のご案内・お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
