const StatusIndicator = props => {
  const statusColors = {
    Alive: `#8bc34a`,
    Dead: `#f44336`,
    unknown: `#9e9e9e`,
  };
  return <div className='status-dot' style={{ backgroundColor: statusColors[props.status] }}></div>;
};

export default StatusIndicator;
