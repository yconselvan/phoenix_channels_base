defmodule PhoenixChannelsBase.ProfilesChannel do
  use PhoenixChannelsBase.Web, :channel
  require Logger

  def join(topic, _, socket) do
    Logger.info "ProfilesChannel::join# topic: #{inspect topic}"
    {:ok, %{profileData: "O QUE PODERIA TER AQUI?"}, socket}
  end

  def handle_in("profileAction1", params, socket) do
    Logger.info "ProfilesChannel::profileAction1#"
    {:reply, {:ok, %{payload: "some payload"} }, socket}
  end
  
  def handle_in("profileAction2", params, socket) do
    Logger.info "ProfilesChannel::profileAction2#"
    {:reply, {:ok, %{payload: "some payload", other_payload: "some more payload"} }, socket}
  end

end
