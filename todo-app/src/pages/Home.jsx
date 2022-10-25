import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/style';
import { useTodos } from '../Hooks/useTodos';
import {
  Header,
  Counter,
  Search,
  Button,
  Empty,
  //Form,//
  Item,
  List,
  Loading,
  //Modal,
  TabBar,
  ChangesAlert,
} from '../components';

const Home = () => {
  const { states, stateUpdaters } = useTodos();
  const navigate = useNavigate();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    //openModal,
    searchValue,
  } = states;

  const {
    // setOpenModal,
    addTodo,
    deleteTodo,
    setSearchValue,
    completeTodo,
    sincronizeTodos,
  } = stateUpdaters;

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
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                onEdit={() =>
                  navigate(`/edit/${todo.id}`, {
                    state: { todo },
                  })
                }
              />
            )}
          ></List>

          {/*{!openModal && (
            <Modal>
              <Form addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
          )} */}

          <ChangesAlert className='z-20' sincronize={sincronizeTodos} />
        </div>
        <TabBar
          //setOpenModal={setOpenModal}
          className='hidden xs:visible'
        />
        <div className='sg:invisible lg:visible absolute right-6 bottom-[-20px] cursor-pointer'>
          <Button
            onClick={() => navigate('/new')}

            //setOpenModal={setOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
