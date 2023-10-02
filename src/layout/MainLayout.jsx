
import '../App.scss';

//dentro del mainLayout va toda la info del inicio de la pag 
// le llega por parametro children(que es el componente itemListContainer)
// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
    return (
    <div className='box'>
        
        <main className='boxInicio'>
        {children}
        </main>

    </div>
    )
}

export default MainLayout;



/*
        <header className='boxNav'>
        < NavBarComponent />
        </header>
*/

/*import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react' ;

const MainLayout = ({ children }) => {

    return (
    <div className='box'>
        <main>{children}</main>
    </div>
    )
}

export default MainLayout*/
