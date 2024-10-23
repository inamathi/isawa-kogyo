import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex gap-8 justify-center">
        <div>有限会社 石和工業</div>
        <ul>
          <li>
            <Link href="privacyPolicy">プライバシーポリシー</Link>
          </li>
        </ul>
      </div>
      <div className="text-[12px] py-2 text-center text-slate-400">
        ©️ isawa kogyo Inc. allright reserved.
      </div>
    </footer>
  );
};

export default Footer;
