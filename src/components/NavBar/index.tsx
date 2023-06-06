"use client";

import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import authService from "@/service/magicAuthService";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// import { magic } from "../../lib/magic-client";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState("authService?.user");

  useEffect(() => {
    const user = authService?.user;
    setUser(user);
  }, []);
  //   const [didToken, setDidToken] = useState("");
  //   const router = useRouter();

  //   useEffect(() => {
  //     const applyUsernameInNav = async () => {
  //       try {
  //         const { email, issuer } = await magic.user.getMetadata();
  //         const didToken = await magic.user.getIdToken();
  //         if (email) {
  //           setUsername(email);
  //           setDidToken(didToken);
  //         }
  //       } catch (error) {
  //         console.error("Error retrieving email", error);
  //       }
  //     };
  //     applyUsernameInNav();
  //   }, []);

  const handleOnClickHome: React.MouseEventHandler<HTMLLIElement> = (e) => {
    // e.preventDefault();
    // router.push("/");
  };

  const handleOnClickMyList: React.MouseEventHandler<HTMLLIElement> = (e) => {
    // e.preventDefault();
    // router.push("/browse/my-list");
  };

  const handleShowDropdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignout: React.MouseEventHandler<HTMLAnchorElement> = async (
    e
  ) => {
    await authService.logOut();
    console.log(authService.isAuthenticated);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          <div className={styles.logoWrapper}>
            <Image
              src="/static/netflix.svg"
              alt="Netflix logo"
              width={128}
              height={34}
            />
          </div>
        </Link>

        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/home">Home</Link>
          </li>
          <li className={styles.navItem2}>
            <Link href="/browse/my-list">My List</Link>
          </li>
        </ul>
        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p className={styles.username}>{user?.emailId}</p>
              {/** Expand more icon */}
              <Image
                src={"/static/expand_more.svg"}
                alt="Expand dropdown"
                width={24}
                height={24}
              />
            </button>

            {showDropdown && (
              <div className={styles.navDropdown}>
                <div>
                  <Link
                    className={styles.linkName}
                    href={"/login"}
                    onClick={handleSignout}
                  >
                    Sign out
                  </Link>
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
