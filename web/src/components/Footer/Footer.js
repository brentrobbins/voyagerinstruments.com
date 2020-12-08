import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PortableText from "../serializers/portableText";
import Navigation from "../Header/Navigation";
import styles from "./footer.module.css";

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
      }
      footerNav: sanityNavigation(_id: { eq: "footerNav" }) {
        links {
          _key
          title
          siteLink
          links {
            _key
            title
            siteLink
          }
        }
      }
    }
  `);
  // console.log({data})
  // console.log(data.footerNav)

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerTopWrapper}>
            <div className={styles.footerTopFirst}>
              <h4>VOYAGER INSTRUMENTS COMPANY</h4>
              <p>
                912 Smithfield Drive, Suite 4 <br />
                Fort Collins, CO 80524
              </p>
            </div>

            <div className={styles.footerTopSecond}>
              <p>
                <b>Sales Contact</b> <br />
                <a href="tel:970-232-9344">(970) 232-9344</a>
                <br />
                <a href="mailto:dbradshaw@voyagerinstruments.com">E-mail Dwight</a>
              </p>
              <p>
                <b>Tech Support Contact</b> <br />
                <a href="tel:970-232-9344">(970) 232-9344</a>
                <br />
                <a href="mailto:dbradshaw@voyagerinstruments.com">E-mail Tech Support</a> <br />
              </p>
            </div>

            <div className={styles.footerTopThird}>
              <Navigation nav={data.footerNav} />
            </div>
          </div>
        </div>
      </footer>

      <footer className={styles.footerBottom}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerBottomWrapper}>
            <span>
              {" "}
              &copy; {new Date().getFullYear()} {data.site.title} All Rights Reserved.
            </span>
            <span>
              Voyager Instruments is a Partner Company with{" "}
              <a
                href="https://www.pioneer-engineering.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pioneer Engineering
              </a>
              .
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

<p>.</p>;
