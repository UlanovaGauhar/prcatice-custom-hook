import useToken from '../hooks/useValue';
import Input from './UI/Input';

const Login = () => {
 const {token,tokene,handlePasswordChange,handleSubmit,handleTextChange,saveToken}=useToken()
  return (
    <form onSubmit={handleSubmit}>
    <label>
      <Input type='password' value={token} onChange={handlePasswordChange} />
    </label>
    <label>
      <Input type='text' value={tokene} onChange={handleTextChange} />
    </label>
    <button type='submit' onClick={saveToken}>LOG IN</button>
  </form>
  );
};

export default Login;


