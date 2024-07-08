"use client";
import { useEffect, useState } from "react";
import { Order } from "@/app/painel/page";

interface Props {
  title: string;
  orders: Order[];
  moveToFinalized: (order: Order, endTime: string) => void;
}

// Componente de lista de pedidos que exibe pedidos ativos ou finalizados, com contagem regressiva para entrega e opção para finalizar.
export const OrdersList: React.FC<Props> = ({
  title,
  orders,
  moveToFinalized,
}) => {
  const [timers, setTimers] = useState<{ [key: string]: number }>({});

  // useEffect para atualizar os timers a cada segundo e limpar o intervalo ao desmontar o componente.
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };
        Object.keys(updatedTimers).forEach((orderId) => {
          if (updatedTimers[orderId] > 0) {
            updatedTimers[orderId] -= 1;
          }
        });
        return updatedTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect para inicializar os timers com a duração inicial dos pedidos e atualizá-los sempre que a lista de pedidos mudar.
  useEffect(() => {
    const initialTimers: { [key: string]: number } = {};
    orders.forEach((order) => {
      initialTimers[order.id] = order.durationInSeconds;
    });
    setTimers(initialTimers);
  }, [orders]);

  // Formata a duração em segundos para o formato 'MM:SS' adicionando 30 minutos ao tempo total.
  const formatDuration = (seconds: number) => {
    const totalSeconds = seconds + 30 * 60;
    const roundedSeconds = Math.round(totalSeconds);
    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Função handleOkClick: Registra o tempo de conclusão de um pedido ativo ao ser clicado no botão OK.
  const handleOkClick = (order: Order) => {
    const endTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    moveToFinalized(order, endTime);
  };

  return (
    <div className="w-full sm:w-1/2 flex-col rounded-lg bg-primary-color">
      <h2 className="p-2 font-semibold text-[1.4em] text-light-color">
        {title}
      </h2>
      <ul>
        {orders.map((order) => (
          <li
            key={order.id}
            className="m-2 p-2 rounded-lg bg-secondary-color font-semibold grid gap-2 grid-cols-6 grid-rows-1 items-center"
          >
            <div className="col-span-1 text-center">{order.id}</div>
            <div className="col-span-2">{order.description}</div>
            <div className="col-span-2 text-center">
              {title === "Ativos"
                ? `${formatDuration(timers[order.id])} / ${order.formattedTime}`
                : order.formattedTime}
            </div>
            <div
              className="col-span-1 text-center p-1 rounded-lg bg-tertiary-color cursor-pointer"
              onClick={() => handleOkClick(order)}
            >
              {title === "Ativos" ? "OK" : order.endTime}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
