import 'bootstrap/dist/css/bootstrap.min.css';

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

export default MainLayout
