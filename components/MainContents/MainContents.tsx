import { TypeData } from "../../types/types";
import { datalist } from "@/app/api/local/datalist";
import BtnRecruit from "@/components/button/BtnRecruit";
import styles from "./styles.module.scss";
import Header from "@/components/header/Header";

const MainContents = () => {
  const overview: TypeData[] = datalist as TypeData[];

  return (
    <section>
      <div className={`${styles.splash} bg-slate-900`}>
        <Header />
        <div className="backdrop-blur-sm">
          <div className="py-4 max-md:py-16">
            <BtnRecruit href={"/inquery"} />
          </div>
        </div>
      </div>
      <div className="py-16 bg-slate-200">
        <h2 className={`${styles.heading1} text-slate-800`}>
          会社概要<span></span>
        </h2>
        <dl className="text-slate-800 container mx-auto pb-16">
          {overview.map((dataitem: TypeData) => (
            <div
              key={dataitem.index}
              className="flex gap-4 items-start max-md:flex-col max-md:px-4 max-md:gap-0"
            >
              <dt className="w-2/5 flex justify-end p-2 after:content-[':'] after:ml-2 font-bold max-md:w-full max-md:justify-start">
                {dataitem.label}
              </dt>
              <dd className="p-2 flex-1 max-md:pt-0">
                {/* 定義型リスト表示 */}
                {dataitem.data}
                {dataitem.definitionList &&
                  dataitem.definitionList.length > 0 && (
                    <dl>
                      {dataitem.definitionList.map((dlitem, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                          <dt className="after:ml-2 max-md:whitespace-nowrap max-md:after:ml-0">
                            {dlitem.dt}
                          </dt>
                          <dd className="flex justify-start w-[200px]">
                            {dlitem.dd}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                {/* 流し込みリスト表示 */}
                {dataitem.mergedList && dataitem.mergedList.length > 0 && (
                  <ul className="flex flex-wrap">
                    {dataitem.mergedList.map((ulitem, index) => (
                      <li
                        key={index}
                        className="after:content-['／'] last:after:content-[''] mb-2"
                      >
                        {ulitem}
                      </li>
                    ))}
                  </ul>
                )}
                {/* 改行リスト表示 */}
                {dataitem.separatedList &&
                  dataitem.separatedList.length > 0 && (
                    <ul className="list-disc mt-2">
                      {dataitem.separatedList.map((ulitem, index) => (
                        <li key={index} className="ml-6 mb-2">
                          {ulitem}
                        </li>
                      ))}
                    </ul>
                  )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default MainContents;
