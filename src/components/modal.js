import StatusIndicator from './statusIndicator';

const ModalInfoItem = props => {
  return (
    <div className='modal-item'>
      <span className='modal-item-title'>{props.title}</span>
      <span className='modal-item-value'>{props.value}</span>
    </div>
  );
};

const ModalContent = props => {
  return (
    <div className='modal-C'>
      <div className='modal-top'>
        <img src={props.item.image} alt={props.item.name} className='mr1 circular' />
        <div className='modal-tr'>
          <p className='modal-name'>{props.item.name}</p>
          <div className='modal-rowc'>
            <StatusIndicator status={props.item.status}></StatusIndicator>
            <p className='mr1'>{props.item.status}</p>
            <p className='mr1'>-</p>
            <p>{props.item.species}</p>
          </div>
        </div>
      </div>
      <div className='modal-bottom'>
        <div className='modal-bc'>
          <ModalInfoItem title='Gender' value={props.item.gender}></ModalInfoItem>
          <ModalInfoItem title='Species' value={props.item.species}></ModalInfoItem>
        </div>
        <div className='modal-bc'>
          <ModalInfoItem title='Location' value={props.item.location.name}></ModalInfoItem>
          <ModalInfoItem title='Origin' value={props.item.origin.name}></ModalInfoItem>
        </div>
      </div>
    </div>
  );
};
export default ModalContent;
