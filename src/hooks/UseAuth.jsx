
import { useContext } from 'react';
import { AuthContext } from '../utilities';

const UseAuth = () => {
    const all = useContext(AuthContext)
    return all;
};

export default UseAuth;