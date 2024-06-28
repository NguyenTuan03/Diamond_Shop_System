<<<<<<< HEAD
import React from 'react'
import Header from '../components/Header'
import classnames from 'classnames/bind';
import styles from './MainLayout.module.scss';
=======
import React, { useContext } from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer";
import { UserContext } from "../components/GlobalContext/AuthContext";
import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import routes from "../config/Config";
>>>>>>> 55455f6ccc5d1eb6f9e051a5187036878166e859
let cx = classnames.bind(styles);
export default function MainLayout({children}) {
  return (
<<<<<<< HEAD
    <div className={cx('wrapper')}>
        <Header/>
        <div className={cx('container')}>
            {children}
        </div>
    </div>
  )
=======
    <>
      <Header />
      {children}
      {auth.userAuth.roleid === 5 && (
        <Button
          onClick={() => nav(routes.diamondValuationRequest)}
          position={"fixed"}
          left={"20px"}
          bottom={"60px"}
          colorScheme="blue"
        >
          <FaPlus style={{ marginRight: "10px" }} /> Create Request
        </Button>
      )}
      <Footer />
    </>
  );
>>>>>>> 55455f6ccc5d1eb6f9e051a5187036878166e859
}
