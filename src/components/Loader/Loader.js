import loading from './loading-gif.gif';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loading} alt='Loading' />
      <h1>Fetching Posts</h1>
    </div>
  );
};

export default Loader;
