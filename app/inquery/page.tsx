import Header from "@/components/header/Header";
import InqueryForm from "@/components/InqueryForm/InqueryForm";
import styles from "./styles.module.scss";
import Reqruit from "@/components/Reqruit/Reqruit";
import Footer from "@/components/footer/Footer";

const Inquery = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Header />
        <div className="backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto my-16">
        <h2 className={`${styles.heading1} text-slate-800`}>
          募集内容<span></span>
          <Reqruit />
        </h2>
        <h2 className={`${styles.heading1} text-slate-800`}>
          お問い合わせ<span></span>
        </h2>
        <InqueryForm />
      </div>
      <Footer />
    </>
  );
};

export default Inquery;
