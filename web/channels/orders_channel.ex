defmodule PhoenixChannelsBase.OrdersChannel do
  use PhoenixChannelsBase.Web, :channel
  require Logger

  def join(topic, params, socket) do
    Logger.info "OrdersChannel::join# topic: #{inspect topic} params: #{inspect params} assigns: #{inspect socket.assigns}"
    {:ok, %{adminName: "SEMPRE A MESMA COISA"}, socket}
  end
  
  def handle_in("orderAction1", params, socket) do
    Logger.info "OrdersChannel::orderAction1#"
    {:reply, {:ok, %{data: "orderAction1Response"} }, socket}
  end

end
