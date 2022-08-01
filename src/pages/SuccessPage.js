import { Link } from 'react-router-dom';

export default function SuccessPage() {
    return (
        <main>
            <h2 className="flex-center success-order">Pedido feito com sucesso!</h2>
            <div className="success-content flex-center">
                <div className="success-content-datas">
                    <span>
                        <h3>Filme e sessão</h3>
                        <p>Enola Holmes</p>
                        <p>24/06/2021 15:00</p>
                    </span>
                    <span>
                        <h3>Ingressos</h3>
                        <p>Assento 15</p>
                        <p>Assento 16</p>
                    </span>
                    <span>
                        <h3>Comprador</h3>
                        <p>Nome: João da Silva Sauro</p>
                        <p>CPF: 123.456.789-10</p>
                    </span>
                </div>
                <Link to="/">
                    <button className="orange-button-finish">Voltar para Home</button>
                </Link>
            </div>
        </main>
    )
}