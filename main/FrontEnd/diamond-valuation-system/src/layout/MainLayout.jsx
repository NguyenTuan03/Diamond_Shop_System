import React, { useContext } from "react";
import Header from "../components/Header";
import classnames from "classnames/bind";
import styles from "./MainLayout.module.scss";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
let cx = classnames.bind(styles);
export default function MainLayout({ children }) {
    const nav = useNavigate();
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>{children}</div>
            <Button
                onClick={() => nav("/diamond-service")}
                backgroundColor=" #7B68EE"
                color="white"
                colorScheme="blue"
                variant="solid"
                mr={4}
                _hover={{ bg: "#6A5ACD" }}
                fontSize="lg"
                borderRadius="15px"
                size={"md"}
                position={"fixed"}
                bottom={"20px"}
                left={"20px"}
            >
                Create Request
            </Button>
        </div>
    );
}
