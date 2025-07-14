import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store'; // Redux Store tiplerini eklemelisiniz.
import { addProduct, deleteProduct, getProduct, updateProduct } from '../../../redux/features/productSlice';
import "./adminpanel.css"



interface Product {
  id?: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

const AdminPanel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  const [formData, setFormData] = useState<Product>({
    name: '',
    brand: '',
    category: '',
    price: 0,
    stock: 0,
    image: '',
  });

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editingProduct) {
      dispatch(updateProduct({ id: editingProduct.id as string, updatedProduct: formData }));
    } else {
      dispatch(addProduct(formData));
    }
    setFormData({ name: '', brand: '', category: '', price: 0, stock: 0, image: '' });
    setEditingProduct(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          placeholder="Brand"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          placeholder="Stock"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button onClick={handleAddOrUpdate}>
          {editingProduct ? 'Yenilə' : 'Məhsul əlavə et'} 
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <img src={product.image} alt={product.name} width="50" />
              </td>
              <td className='td-buttons'>
                <button onClick={() => handleEdit(product)} className='edit'>Düzəlt</button>
                <button onClick={() => handleDelete(product.id as string)} className='delete'>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
