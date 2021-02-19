import { getData } from './../util';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { debounce } from 'throttle-debounce';

const SearchBar = props => {
  const debounceFunc = debounce(1000, true, async e => {
    const searchText = e.target.value;
    getData({ searchText }).then(result => {
      props.dispatch({
        type: `CHANGE_RESULTS`,
        results: result.results,
      });
      props.dispatch({
        type: `CHANGE_INFO`,
        info: result.info,
      });
    });
  });

  return (
    <Input
      placeholder='Search for a contact'
      prefix={<SearchOutlined className='search-icon'></SearchOutlined>}
      onChange={debounceFunc}
      size='large'
      bordered={false}
      className='searchbar'
    />
  );
};
export default SearchBar;
