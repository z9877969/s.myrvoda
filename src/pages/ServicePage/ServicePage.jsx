import { useParams } from 'react-router-dom';

const ServicePage = () => {
  const params = useParams();
  console.log(params);
  return <div>ServicePage</div>;
};

export default ServicePage;
