import { useParams } from 'react-router-dom';
import CategoryLayout from '@components/Category/CategoryLayout';

const CategoryScreen = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  if (!categoryId) return null;

  return <CategoryLayout categoryId={categoryId} />;
};

export default CategoryScreen;
