import Header from "@/components/header/Header";
import InqueryForm from "@/components/InqueryForm/InqueryForm";
import styles from "./styles.module.scss";
import Recruit from "@/components/Recruit/Recruit";
import Footer from "@/components/footer/Footer";

const Inquery = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Header />
        <div className="backdrop-blur-sm"></div>
      </div>
      <div className="bg-slate-100">
        <div className="container mx-auto py-16">
          <h2 className={`${styles.heading1} text-slate-800`}>
            募集内容<span></span>
            <Recruit />
          </h2>
          <h2 className={`${styles.heading1} text-slate-800`}>
            お問い合わせ<span></span>
          </h2>
          <InqueryForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inquery;
