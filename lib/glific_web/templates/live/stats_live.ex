defmodule GlificWeb.StatsLive do
  @moduledoc """
  StatsLive uses phoenix live view to show current stats
  """
  use GlificWeb, :live_view

  alias Glific.Reports

  @doc false
  @spec mount(any(), any(), any()) ::
          {:ok, Phoenix.LiveView.Socket.t()} | {:ok, Phoenix.LiveView.Socket.t(), Keyword.t()}
  def mount(_params, _session, socket) do
    if connected?(socket) do
      :timer.send_interval(3000, self(), :refresh)
    end

    socket = assign_stats(socket, :init)
    {:ok, socket}
  end

  @doc false
  @spec handle_info(any(), any()) :: {:noreply, Phoenix.LiveView.Socket.t()}
  def handle_info(:refresh, socket) do
    {:noreply, assign_stats(socket, :call)}
  end

  def handle_info({:get_stats, kpi}, socket) do
    {:noreply, assign(socket, kpi, Reports.get_kpi(kpi))}
  end

  defp assign_stats(socket, :init) do
    stats = Enum.map(Reports.kpi_list(), &{&1, "loading.."})

    assign(socket, Keyword.merge(stats, page_title: "Glific Dashboard"))
    |> assign(get_chart_data())
  end

  defp assign_stats(socket, :call) do
    Enum.each(Reports.kpi_list(), &send(self(), {:get_stats, &1}))
    assign(socket, get_chart_data())
  end

  def get_chart_data() do
    [
      contact_chart_data: %{
        data: fetch_data("contacts"),
        labels: fetch_date_labels("contacts")
      },
      conversation_chart_data: %{
        data: fetch_data("messages_conversations"),
        labels: fetch_date_labels("messages_conversations")
      }
    ]
  end

  defp fetch_data(table_name) do
    Reports.get_kpi_data(1, table_name)
    |> Map.values()
  end

  defp fetch_date_labels(table_name) do
    Reports.get_kpi_data(1, table_name)
    |> Map.keys()
  end
end
