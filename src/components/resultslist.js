import React from 'react';
import { List } from 'antd';
import Card from './card';

const ResultsList = props => {
  return (
    <List
      size='default'
      dataSource={props.store.results}
      renderItem={(item, i) => {
        return (
          <List.Item key={i}>
            <Card item={item}></Card>
          </List.Item>
        );
      }}
    />
  );
};

const areEqual = (prev, next) => prev.store.results === next.store.results;

export default React.memo(ResultsList, areEqual);
