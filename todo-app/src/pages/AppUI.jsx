import React from "react";
import styles from "../styles/style";
import { Context } from "../context/context";

import {
  Header,
  Button,
  Counter,
  Empty,
  Form,
  Item,
  List,
  Loading,
  Modal,
  Search,
  TabBar,
} from "../components";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(Context);

  return (
    <div className="bg-primary h-screen overflow-x-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Header />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Counter />
          <Search />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <List>
            {error && <Error error={error} />}
            {loading && <Loading />}

            {!loading && !searchedTodos.length && <Empty />}

            {searchedTodos.map((todo) => (
              <Item
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </List>

          {!openModal && (
            <Modal>
              <Form />
            </Modal>
          )}
        </div>
        <TabBar className="hidden xs:visible">
          <Button />
        </TabBar>
        <div className="sg:invisible lg:visible absolute right-6 bottom-[-20px] cursor-pointer">
          <Button setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  );
};

export { AppUI };
