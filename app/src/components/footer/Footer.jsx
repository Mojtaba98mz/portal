import React from "react";
import styles from "./footer.module.css";
import topFooter from "../../assets/svg/topFooter.svg";
import bottomFooter from "../../assets/svg/bottomFooter.svg";
import SVGComponent from "./BottomSvg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={topFooter} className={styles.topSvg} />
      <div className={styles.linkContainers}>
        <ul>
          <li>
            <h4 className={styles.headerLinks}>راه های ارتباطی</h4>
          </li>
          <li>
            <Link className={styles.links}>تلفن تماس</Link>
          </li>
          <li>
            <Link className={styles.links}>آدرس:تهران</Link>
          </li>
        </ul>
        <ul>
          <li>
            <h4 className={styles.headerLinks}>لینک های مفید</h4>
          </li>
          <li>
            <Link to="/login" className={styles.links}>
              درباره ما
            </Link>
          </li>
          <li>
            <Link className={styles.links}>تماس با ما</Link>
          </li>
          <li>
            <Link className={styles.links}>شرایط و قوانین</Link>
          </li>
          <li>
            <Link className={styles.links}>سوالات متداول</Link>
          </li>
        </ul>
      </div>
      <div className={styles.bottomSvg}>
        <SVGComponent />
      </div>
    </div>
  );
};

export default Footer;
