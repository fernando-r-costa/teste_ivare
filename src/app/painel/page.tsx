"use client";
import { useState } from "react";
import { Button } from "../components/buttons/Button";
import { OrdersList } from "../components/ordersList/OrdersList";
import { NewOrder } from "../components/newOrder/NewOrder";

export interface Order {
  id: string;
  description: string;
  durationInSeconds: number;
  formattedTime: string;
  endTime?: string;
}

// Componente Painel que gerencia os pedidos ativos e finalizados, incluindo adição, movimentação e listagem dos pedidos.
const Painel = () => {
  const [modalNewOrder, setModalNewOrder] = useState(false);
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);
  const [finalizedOrders, setFinalizedOrders] = useState<Order[]>([]);

  // Função toggleModal: Alterna o estado do modal de novo pedido entre visível e invisível.
  const toggleModal = () => setModalNewOrder(!modalNewOrder);

  // Função addOrder: Adiciona um novo pedido à lista de pedidos ativos.
  const addOrder = (order: Order) => {
    setActiveOrders((prevOrders) => [...prevOrders, order]);
  };

  // Função moveToFinalized: Move um pedido da lista de pedidos ativos para a lista de pedidos finalizados, registrando o tempo de conclusão.
  const moveToFinalized = (order: Order, endTime: string) => {
    setActiveOrders((prevOrders) =>
      prevOrders.filter((o) => o.id !== order.id)
    );
    setFinalizedOrders((prevOrders) => [...prevOrders, { ...order, endTime }]);
  };

  return (
    <div className="flex-col flex justify-end">
      {modalNewOrder && (
        <NewOrder closeModal={toggleModal} addOrder={addOrder}></NewOrder>
      )}
      <Button onClick={toggleModal}>Novo Pedido</Button>
      <div className="flex flex-col sm:flex-row p-4 gap-4">
        <OrdersList
          title="Ativos"
          orders={activeOrders}
          moveToFinalized={moveToFinalized}
        ></OrdersList>
        <OrdersList
          title="Finalizados"
          orders={finalizedOrders}
          moveToFinalized={() => {}}
        ></OrdersList>
      </div>
    </div>
  );
};

export default Painel;
