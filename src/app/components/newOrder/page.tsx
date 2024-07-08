import axios from "axios";
import { useState } from "react";
import Button from "../buttons/page";
import Form from "../form/page";
import FormInput from "../inputs/page";
import FormText from "../texts/page";
import { Order } from "@/app/painel/page";

type NewOrderProps = {
  closeModal: () => void;
  addOrder: (order: Order) => void;
};

// Função assíncrona para obter as coordenadas geográficas a partir de um endereço usando a API de geocodificação.
const getGeocode = async (address: string) => {
  try {
    const response = await axios.get(
      `https://api.openrouteservice.org/geocode/search?api_key=${
        process.env.NEXT_PUBLIC_YOUR_API_KEY
      }&text=${encodeURIComponent(address)}`
    );

    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      const coordinates = response.data.features[0].geometry.coordinates;
      return {
        latitude: coordinates[1],
        longitude: coordinates[0],
      };
    } else {
      throw new Error("Nenhum resultado encontrado para o endereço fornecido.");
    }
  } catch (error) {
    console.error("Error getting geocode:", error);
    throw error;
  }
};

// Função assíncrona para calcular a duração estimada de viagem entre um ponto de origem e destino usando a API de rotas.
const calculateTime = async (origin: string, destination: string) => {
  try {
    const response = await axios.get(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.NEXT_PUBLIC_YOUR_API_KEY}&start=${origin}&end=${destination}`
    );

    const durationInSeconds =
      response.data.features[0].properties.segments[0].duration;
    const time = new Date(
      Date.now() + durationInSeconds * 1000 + 30 * 60 * 1000
    );
    const formattedTime = `${time.getHours().toString().padStart(2, "0")}:${time
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    return {
      durationInSeconds,
      formattedTime,
    };
  } catch (error) {
    console.error("Error calculating Time:", error);
    throw error;
  }
};

// Componente de formulário modal para adicionar novos pedidos, incluindo geocodificação e cálculo automático de tempo de entrega.
const NewOrder = ({ closeModal, addOrder }: NewOrderProps) => {
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Função handleNewOrder: Manipula a criação de um novo pedido, incluindo a obtenção de coordenadas geográficas e cálculo do tempo estimado de entrega.
  const handleNewOrder = async () => {
    try {
      setError(null);

      const coordinates = await getGeocode(address);
      const destination = `${coordinates.longitude},${coordinates.latitude}`;

      const { durationInSeconds, formattedTime } = await calculateTime(
        "-48.278070, -18.921429",
        destination
      );

      const orderId = Math.floor(1000 + Math.random() * 9000).toString();

      addOrder({
        id: orderId,
        description,
        durationInSeconds,
        formattedTime,
      });

      closeModal();
    } catch (error) {
      console.error("Error handling new order:", error);
      setError(
        "Ocorreu um erro ao criar o pedido. Por favor, tente novamente."
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-color/60 z-50">
      <div className="bg-secondary-color rounded-lg shadow-lg p-6 w-full max-w-lg mx-4 relative">
        <button
          className="absolute top-2 right-6 text-[3em]"
          onClick={closeModal}
        >
          &times;
        </button>
        <FormText type="label-large">Novo Pedido</FormText>
        <Form>
          <FormText type="label-short">Descrição:</FormText>
          <FormInput
            placeholder="Descrição do pedido"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></FormInput>
          <FormText type="label-short">Endereço:</FormText>
          <FormInput
            placeholder="Endereço do pedido"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></FormInput>
          {error && <FormText type="error">{error}</FormText>}
        </Form>
        <div className="flex justify-end">
          <Button onClick={handleNewOrder}>Novo Pedido</Button>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
