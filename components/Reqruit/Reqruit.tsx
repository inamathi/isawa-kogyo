import React from "react";
import styles from "./styles.module.scss";

const Reqruit = () => {
  return (
    <div className="mx-auto my-8">
      <dl className={`${styles.recruitInfo} text-slate-800`}>
        <div className="flex gap-4">
          <dt className="text-nowrap text-slate-600">募集職種</dt>
          <dd>
            <dl>
              <div>
                <dt>1. とび・土工工事</dt>
                <dd>
                  とび工事・鳶工事／足場等仮設工事／足場等仮設工事／鉄骨組立て工事・鉄骨建て方工事／杭打ち工事／場所打ち杭工事／コンクリート打設工事／地盤改良工事／地盤改良工事／はつり工事／重量物の揚重運搬配置工事／土工事・土工工事
                </dd>
              </div>
              <div>
                <dt>2. 土木工事</dt>
                <dd>土木一式工事／推進工事／土木工事／下水道工事</dd>
              </div>
              <div>
                <dt>3. 舗装工事</dt>
                <dd>
                  アスファルト舗装工事／ブロック舗装工事／舗装工事／コンクリート舗装工事
                </dd>
              </div>
              <div>
                <dt>4. 解体工事</dt>
                <dd>工作物解体工事／解体工事</dd>
              </div>
            </dl>
          </dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-nowrap text-slate-600">給与</dt>
          <dd>
            <ul>
              <li>初任給：000,000円</li>
              <li>昇給：年１回</li>
              <li>賞与：年２回（４ヶ月）</li>
            </ul>
          </dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-nowrap text-slate-600">勤務地</dt>
          <dd>
            <ul>
              <li>神奈川全域</li>
            </ul>
          </dd>
        </div>
        <div className="flex gap-4">
          <dt className="text-nowrap text-slate-600">特記</dt>
          <dd>
            <ul>
              <li>社保完備</li>
              <li>車・バイク通勤可</li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Reqruit;
