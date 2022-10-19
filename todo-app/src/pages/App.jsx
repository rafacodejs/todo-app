import React from 'react';
import styles from '../styles/style';
import { useTodos } from './useTodos';
import {
  Header,
  Counter,
  Search,
  Button,
  Empty,
  Form,
  Item,
  List,
  Loading,
  Modal,
  TabBar,
  ChangesAlert,
} from '../components';

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <div className='bg-primary h-screen overflow-x-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} flex-col`}>
        <Header loading={loading}>
          <Counter totalTodos={totalTodos} completedTodos={completedTodos} />

          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </Header>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <List
            error={error}
            loading={loading}
            searchedTodos={searchedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}
            onError={() => <Error />}
            onLoading={() => <Loading />}
            onEmpty={() => <Empty />}
            onEmptySearchResults={(searchText) => (
              <p className={`${styles.paragraph}`}>
                No hay resultados para {searchText}
              </p>
            )}
            render={(todo) => (
              <Item
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            )}
          ></List>

          {!openModal && (
            <Modal>
              <Form addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
          )}
          <ChangesAlert className='z-20' sincronize={sincronizeTodos} />
        </div>
        <TabBar setOpenModal={setOpenModal} className='hidden xs:visible'>
          <Button />
        </TabBar>
        <div className='sg:invisible lg:visible absolute right-6 bottom-[-20px] cursor-pointer'>
          <Button setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  );
};

export { App };
