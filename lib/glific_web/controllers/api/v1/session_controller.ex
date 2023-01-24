defmodule GlificWeb.API.V1.SessionController do
  @moduledoc """
  The Pow User Session Controller
  """

  use GlificWeb, :controller
  require Logger

  alias Glific.{Repo, Users.User}
  alias GlificWeb.APIAuthPlug
  alias Plug.Conn

  @doc false
  @spec create(Conn.t(), map()) :: Conn.t()
  def create(conn, %{"user" => user_params}) do
    IO.inspect("Came in the controller")
    user_params = Map.put(user_params, "organization_id", conn.assigns[:organization_id])

    IO.inspect(["config", conn.private[:pow_config]])

    conn
    |> Pow.Plug.authenticate_user(user_params)
    |> case do
      {:ok, conn} ->
        Logger.info("Logged in user: user_id: '#{conn.assigns[:current_user].id}'")

        update_last_login(conn.assigns[:current_user], conn)

        json(conn, %{
          data: %{
            access_token: conn.private[:api_access_token],
            token_expiry_time: conn.private[:api_token_expiry_time],
            renewal_token: conn.private[:api_renewal_token]
          }
        })

      {:error, conn} ->
        Logger.error("Logged in user failure: user_phone: '#{user_params["phone"]}'")

        conn
        |> put_status(401)
        |> json(%{error: %{status: 401, message: "Invalid phone or password"}})
    end
  end

  defp update_last_login(user, conn) do
    remote_ip = GlificWeb.Tenants.remote_ip(conn)

    Logger.info("Updating user login timestamp, user_phone: #{user.phone}, ip: #{remote_ip}")

    user
    # we are not using update_user call here, since it destroys all tokens
    |> User.update_fields_changeset(%{
      last_login_at: DateTime.utc_now(),
      last_login_from: remote_ip
    })
    |> Repo.update()
  end

  @doc false
  @spec renew(Conn.t(), map()) :: Conn.t()
  def renew(conn, _params) do
    config = Pow.Plug.fetch_config(conn)

    conn
    |> APIAuthPlug.renew(config)
    |> case do
      {conn, nil} ->
        conn
        |> put_status(401)
        |> json(%{error: %{status: 401, message: "Invalid token"}})

      {conn, _user} ->
        json(conn, %{
          data: %{
            access_token: conn.private[:api_access_token],
            token_expiry_time: conn.private[:api_token_expiry_time],
            renewal_token: conn.private[:api_renewal_token]
          }
        })
    end
  end

  @doc false
  @spec delete(Conn.t(), map()) :: Conn.t()
  def delete(conn, _params) do
    conn
    |> Pow.Plug.delete()
    |> json(%{data: %{}})
  end
end
