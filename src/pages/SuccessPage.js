import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function SuccessPage() {
    const location = useLocation();

    return (
        <main>
            <h2 className="flex-center success-order">Pedido feito com sucesso!</h2>
            <div className="success-content flex-center">
                <div className="success-content-datas">
                    <span>
                        <h3>Filme e sessão</h3>
                        <p>{location.state.movie}</p>
                        <p>{location.state.date} {location.state.hour}</p>
                    </span>
                    <span>
                        <h3>Ingressos</h3>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </span>
                    <span>
                        <h3>Comprador</h3>
                        <p>Nome: {location.state.name}</p>
                        <p>CPF: {location.state.cpf}</p>
                    </span>
                </div>
                <Link to="/">
                    <button className="orange-button-finish">Voltar para Home</button>
                </Link>
            </div>
        </main>
    )
}