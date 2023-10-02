
import 'bootstrap/dist/css/bootstrap.min.css';

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
