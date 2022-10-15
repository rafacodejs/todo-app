import React from 'react';
import styles from '../styles/style';

const List = (props) => {
  return (
    <section
      className={`${styles.flexCenter} flex-col text-white relative bottom-12 xs:top-3 ss:top-0`}
    >
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalTodos && props.onEmpty()}

      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      {!props.loading && !props.error && props.searchedTodos.map(props.render)}

      <ul className={`${styles.flexCenter} list-none`}>{props.children}</ul>
    </section>
  );
};

export { List };
