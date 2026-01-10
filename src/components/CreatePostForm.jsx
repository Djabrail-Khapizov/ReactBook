import { useFormInput } from '../hooks/useFormInput';

function CreatePostForm({ dispatch }) {
  const contentInput = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      author: 'Moi',
      content: contentInput.value,
      likes: 0,
      liked: false
    };
    dispatch({ type: 'ADD_POST', payload: newPost });
    contentInput.reset();
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input {...contentInput} placeholder="Quoi de neuf ?" required />
      <button type="submit">Publier</button>
    </form>
  );
}

export default CreatePostForm;