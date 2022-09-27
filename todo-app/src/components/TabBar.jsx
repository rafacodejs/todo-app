import React from "react";
import styles from "../styles/style";
import { Button } from "./Button";
import { Context } from "../context/context";

const TabBar = () => {
  const { setOpenModal } = React.useContext(Context);

  return (
    <div
      className={`${styles.flexCenter} w-full h-14 bg-blue-gradient space-x-8 fixed left-0 bottom-0 shadow-md lg:hidden rounded-t-xl`}
    >
      <Button setOpenModal={setOpenModal} />
    </div>
  );
};

export { TabBar };
