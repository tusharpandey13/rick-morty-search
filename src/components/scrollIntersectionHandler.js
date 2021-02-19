import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getData } from './../util';
const ScrollIntersectionHandler = ({ store, dispatch, initialState }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && store.info && store.results && store.info.next) {
      getData({ url: store.info.next }).then(result => {
        dispatch({
          type: `CHANGE_RESULTS`,
          results: [...store.results, ...result.results],
        });
        dispatch({
          type: `CHANGE_INFO`,
          info: result.info,
        });
      });
    }
  }, [inView, dispatch, store.info, store.results]);

  return <div ref={ref} style={{ opacity: 0, width: `100%`, minHeight: `1px` }}></div>;
};
export default ScrollIntersectionHandler;
