import React, { useState } from 'react';
import { Modal } from 'antd';
import ModalContent from './modal';
import StatusIndicator from './statusIndicator';

const Card = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className='card' onClick={showModal}>
        <div className='card-left'>
          <img src={props.item.image} alt={props.item.name} className='mr1' />
          <p>{props.item.name}</p>
        </div>
        <div className='card-right'>
          <StatusIndicator status={props.item.status}></StatusIndicator>
          <p className='mr1'>{props.item.status}</p>
          <p className='mr1'>-</p>
          <p>{props.item.species}</p>
        </div>
      </div>
      <Modal
        title='Basic Modal'
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        title={null}
        width={400}
      >
        <ModalContent {...props}></ModalContent>
      </Modal>
    </>
  );
};
export default Card;
