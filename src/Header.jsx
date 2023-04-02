import { useEffect, useContext } from 'react';
import ItemContext from './Context';

const Header = () => {

    useEffect(() => {
        console.log('Header');
    });

    const { value } = useContext(ItemContext);
    const [items] = value;

    return (
        <header style={{ backgroundColor:'yellow' }}>
            <h5>Header</h5>
            Cəmi: {items.length}
        </header>
    )
}

export default Header;